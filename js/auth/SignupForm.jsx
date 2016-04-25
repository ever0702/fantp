import React from 'react';
import {connect} from 'react-redux';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import DelayInput from '../commonComponents/DelayInput';
import {get} from '../utils/httpHelper';
import authService from './auth.service';
import {signup} from './authActions';

class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checkingUnique: false,
			isUserUnique: true,
			showUserUnique: false,
			username: '', 
			password: '', 
			email: ''

		};

		this.submitForm = this.submitForm.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onUsernameChange = this.onUsernameChange.bind(this);
	}

	onInputChange = (key, value) => this.setState({
		...this.state,
		[key]: value
	})

	 onUsernameChange= username => {
	 	if(username.length < 3) {
	 		this.setState({
	 			...this.state,
	 			showUserUnique: false
	 		});
	 		return;
	 	}
	 	authService.checkUserUnique({username})	
	 		.then(res => {
	 			console.log(res)
	 			this.setState({
	 				...this.state,
	 				showUserUnique: true,
	 				isUserUnique: res.unique
	 			})
	 		});
	}

	submitForm() {
		const {username, password, email} = this.state;
		this.props.dispatch(signup({
			username,
			password,
			email
		})).then(res => console.log(res));
		// authService.signup({
		// 	username, 
		// 	password,
		// 	email
		// }).then(res => console.log(res));
	}

	render(){

		let state = this.state;
		let {showUserUnique, isUserUnique} = state;
		this.onInputChange = this.onInputChange.bind(this);

		return (
			<div className="signup-form card">
				<div className="card-block">
					<h4 className="card-title">Create New Account</h4>
					<form onSubmit={e=> {
						e.preventDefault();
						this.submitForm(); }
					}>
						<fieldset>
							<label htmlFor="">Username</label>
							{
								showUserUnique &&
								<label className="pull-right">
									<span className={isUserUnique?'text-success': 'text-danger'}>
										{isUserUnique?'Email Available':'Email Taken'}
									</span>
								</label>
							}
							<DelayInput onTextChange={v => {this.onInputChange('username', v); this.onUsernameChange(v)} } type="email" className="form-control" placeholder="Email" />
						</fieldset>
						<LabelFieldSet label="Email" >
							<input type="text" value={state.email} className="form-control" placeholder="email" onChange={e=> this.onInputChange('email', e.target.value)}/>
						</LabelFieldSet>
						<LabelFieldSet label="Password" >
							<input type="password" onChange={e=> this.onInputChange('password', e.target.value)} className="form-control" placeholder="Password"/>
						</LabelFieldSet>
						<LabelFieldSet label="Re-Passowrd" >
							<input type="password" className="form-control" placeholder="Re-Password" onChange={e => this.onInputChange('repassword', e.target.value)} />
						</LabelFieldSet>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
			)
	}
}


export default connect()(SignupForm);
