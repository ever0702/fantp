import React from 'react';
import {connect} from 'react-redux';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import DelayInput from '../commonComponents/DelayInput';
import {get} from '../utils/httpHelper';
import SignupForm from './SignupForm';


const SignupPage = () => (
	<div className="signup-page">
		<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
			<SignupForm />
		</div>
	</div>
);


export default connect(
		state => ({
			username: '111',
			password: '222'
		})	
	)(SignupPage);
