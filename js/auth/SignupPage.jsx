import React, {PropTypes} from 'react';
import navHistory from '../utils/navHistory';
import {connect} from 'react-redux';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import DelayInput from '../commonComponents/DelayInput';
import {get} from '../utils/httpHelper';
import SignupForm from './SignupForm';
import NavContainerShell from '../partials/NavContainerShell';

@connect()
class SignupPage extends React.Component {
	constructor(props) {
		super(props);
		console.log('signuppage props', props);
		console.log()
	}

	signupSuccess() {
		// this.props.history.push('/home');
		navHistory.push('/home');
	}
	onSigninClick() {
		navHistory.push('/signin');
	}

	render() {
		return (
			<NavContainerShell>
				<div className="signup-page">
					<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
						<SignupForm onSigninClick={this.onSigninClick} onSignupSuccess={this.signupSuccess.bind(this)}/>
					</div>
				</div>
			</NavContainerShell>
		);
	}

}

export default SignupPage;

