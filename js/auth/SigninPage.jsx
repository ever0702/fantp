import React, {Component} from 'react';
import {connect} from 'react-redux';
import navHistory from '../utils/navHistory';
import {signinSuccess, signinError} from './authActions';
import authService from './auth.service';
import NavContainerShell from '../partials/NavContainerShell';
import SigninForm from './SigninForm';
import Footer from '../partials/Footer';

@connect()
export default class SigninPage extends React.Component{
	constructor(props) {
		super(props);
	}

	signinSuccess() {
		console.log('you have singined success');
		navHistory.push('/home');
	}

	onSignupClick() {
		navHistory.push('/signup');
	}

	render() {
		return (
			<NavContainerShell >
				<div className="signin-page ">
					<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mui">
						<SigninForm onSignupClick={this.onSignupClick} onSigninSuccess={this.signinSuccess.bind(this)}/>
					</div>
				</div>
				
			</NavContainerShell>

			);
	}
}


