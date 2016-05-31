import React, {Component} from 'react';
import {connect} from 'react-redux';
import simpleForm from '../highOrderComponents/simpleForm'
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';
import Card from '../commonComponents/Card';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import {signinSuccess, signinError} from './authActions';
import authService from './auth.service';
import loadingCover from '../highOrderComponents/loadingCover';
import {Rx} from '../utils/rxUtils';
import toastr from 'toastr';
import {validateEmail, validatePassword} from '../../isomorphic/utils/accountUtils';

const validate = ({email = '', password = ''}) => {
	let errs = {};

	let emailResult = validateEmail(email);
	if(!emailResult.success) errs.email = emailResult.message;

	let passwordResult = validatePassword(password);
	if(!passwordResult.success) {
		errs.password = passwordResult.message;
	}

	return errs;
}


@loadingCover
@connect()
@simpleForm({
	fields: ['email', 'password', 'rememberMe'],
	validate
})
class SigninForm extends Component {

	state= {signinErrorMessage: null};

	loadingSub = new Rx.Subject();
	
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.loadingSub.debounce(400).subscribe(v => this.props.setLoading(v));
	}

	submitForm() {
		let {fields, isFormValid, dispatch, onSigninSuccess, setLoading} = this.props;
		if(!isFormValid) return;
		const{email, password} = fields;
		this.loadingSub.onNext(true);
		authService.signin({email, password})
			.then(result => {
				this.loadingSub.onNext(false);
				if(result.success) {
					dispatch(signinSuccess(result));
					this.setState({signinErrorMessage: null});
					onSigninSuccess();
				}	
				else {
					this.setState({signinErrorMessage: result.message});
					dispatch(signinError())
				}
			})
			.catch(err => this.loadingSub.onNext(false));
	}

	render() {
		let {email, password, rememberMe, hasSubmitted, onSignupClick, preSubmit, ...rest} = this.props;

		return (
			<div className="mui">
				<Card className="signin-form card shadow" {...rest} title="用户登录">
						<h7 className="text-danger">{this.state.signinErrorMessage}</h7>
						<form  onSubmit= {
							e => {
								e.preventDefault();
								preSubmit();
								this.submitForm();
								console.log('has submitted');
							}
						}>
							<LabelFieldSet label="邮箱" err={(hasSubmitted || email.touched)&&email.error}>
								<input type="text"  {...email} className="form-control" placeholder="请输入邮箱"/>
							</LabelFieldSet>
							<p></p>
							<LabelFieldSet label="密码" err={(hasSubmitted||password.touched)&&password.error}>
								<input type="password"  {...password} className="form-control" placeholder="请输入密码"/>
							</LabelFieldSet>
							<div style={{display:'none'}} className="checkbox">
								<label>
									<input {...rememberMe} type="checkbox"/>
									<span>Remember Me</span>
								</label>
							</div>
							<p></p>
							<button style={{marginRight:20}} type="submit" className="btn btn-primary-outline">登录</button>
							<small><a href="" className="forget-password">忘记密码</a></small>
							<small><a onClick={onSignupClick} className="forget-password">新用户？</a></small>
						</form>

				</Card>
			</div>
			)

	}
}

export default SigninForm;
