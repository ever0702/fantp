import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import simpleForm from '../highOrderComponents/simpleForm'
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import {signinSuccess, signinError} from './authActions';
import authService from './auth.service';
import toastr from 'toastr';


const validate = ({username = '', password = ''}) => {
	let errs = {};
	if(!username) {
		errs.username = 'Please fill in Username';
	}
	if(!password) {
		errs.password = 'Please fill in Password';
	}

	return errs;
}


@connect()
@simpleForm({
	fields: ['username', 'password', 'rememberMe'],
	validate
})
class SigninForm extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			signinErrorMessage: 'No ERROR'
		};
	}
	componentDidMount() {
	}

	submitForm() {
		let {fields, isFormValid, dispatch, onSigninSuccess} = this.props;
		if(!isFormValid) return;
		const{username, password} = fields;
		authService.signin({username, password})
			.then(result => {
				console.log(result)
				toastr.success(result)
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
		let {username, password, rememberMe, hasSubmitted, preSubmit} = this.props;

		return (
				<div className="signin-form card">
					<div className="card-block">
						<h4>Sign In</h4>
						<h3>{this.state.signinErrorMessage}</h3>
						<form  onSubmit= {
							e => {
								e.preventDefault();
								preSubmit();
								this.submitForm();
								console.log('has submitted');
							}
						}>
							<LabelFieldSet label="Username" err={(hasSubmitted || username.touched)&&username.error}>
								<input type="text"  {...username} className="form-control" placeholder="Username"/>
							</LabelFieldSet>
							<LabelFieldSet label="Password" err={(hasSubmitted||password.touched)&&password.error}>
								<input type="password"  {...password} className="form-control" placeholder="Password"/>
							</LabelFieldSet>
							<div className="checkbox">
								<label>
									<input {...rememberMe} type="checkbox"/>
									<span>Remember Me</span>
								</label>
							</div>
							<button type="submit" className="btn btn-primary-outline">Sign In</button>
							<a href="" className="forget-password">Forget Password?</a>
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
		hashHistory.push('/home-app');
	}

	render() {
		return (
				<div className="signin-page">
					<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
						<SigninForm onSigninSuccess={this.signinSuccess.bind(this)}/>
					</div>
				</div>
			);
	}
}


