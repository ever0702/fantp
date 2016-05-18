import React, {Component} from 'react';
import {connect} from 'react-redux';
import navHistory from '../utils/navHistory';
import simpleForm from '../highOrderComponents/simpleForm'
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import {signinSuccess, signinError} from './authActions';
import authService from './auth.service';
import NavContainerShell from '../partials/NavContainerShell';
import toastr from 'toastr';


const validate = ({email = '', password = ''}) => {
	let errs = {};
	if(!email) {
		errs.email = 'Please fill in email';
	}
	if(!password) {
		errs.password = 'Please fill in Password';
	}

	return errs;
}


@connect()
@simpleForm({
	fields: ['email', 'password', 'rememberMe'],
	validate
})
class SigninForm extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			signinErrorMessage: null
		};
	}
	componentDidMount() {
	}

	submitForm() {
		let {fields, isFormValid, dispatch, onSigninSuccess} = this.props;
		if(!isFormValid) return;
		const{email, password} = fields;
		authService.signin({email, password})
			.then(result => {
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
			// .catch(err => toastr.error(err));
	}

	render() {
		let {email, password, rememberMe, hasSubmitted, preSubmit} = this.props;

		return (
				<div className="signin-form card shadow">
					<div className="card-block">
						<h4>用户登录</h4>
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
							<button type="submit" className="btn btn-primary-outline">Sign In</button>
							<a href="" className="forget-password">忘记密码</a>
						</form>

					</div>
				</div>

			)

	}
}

@connect()
export default class SigninPage extends React.Component{
	constructor(props) {
		super(props);
	}

	signinSuccess() {
		console.log('you have singined success');
		navHistory.push('/home');
	}

	render() {
		return (
			<NavContainerShell >
				<div className="signin-page ">
					<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mui">
						<SigninForm onSigninSuccess={this.signinSuccess.bind(this)}/>
					</div>
				</div>
			</NavContainerShell>
			);
	}
}


