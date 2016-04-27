import React, {PropTypes} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import DelayInput from '../commonComponents/DelayInput';
import {get} from '../utils/httpHelper';
import SignupForm from './SignupForm';

@connect()
export default class SignupPage extends React.Component {
	constructor(props) {
		super(props);
		console.log('signuppage props', props);
		console.log()
	}

	signupSuccess() {
		// this.props.history.push('/home-app');
		hashHistory.push('/home-app');
	}

	render() {
		return (
			<div className="signup-page">
				<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
					<SignupForm onSignupSuccess={this.signupSuccess.bind(this)}/>
				</div>
			</div>
		);
	}

}

export default SignupPage;

