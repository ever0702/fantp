import React from 'react';
import {connect} from 'react-redux';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import DelayInput from '../commonComponents/DelayInput';
import {get} from '../utils/httpHelper';
import authService from './auth.service';
import {signup} from './authActions';
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';

class SignupForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			checkingUnique: false,
			isUserUnique: true,
			showUserUnique: false,
			form: createFormInitialState(['username', 'email', 'password', 'repassword'])
		}

		this.getHandler= formEvtHandler(this.state, this.setState.bind(this));

		this.submitForm = this.submitForm.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onUsernameChange = this.onUsernameChange.bind(this);
	}

	onInputChange = (key, value) => this.setState({
		...this.state,
		[key]: value
	})

	testChange = value => {
		console.log('test change', value)
		this.setState({
		...this.state,
		form: {
			...this.state.form,
			fields: {
				...this.state.form.fields,
				email: value.target.value
			}
		}	
	})
	}

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
	}

	render(){
		let {getHandler, setState, state} = this;

		let {showUserUnique, isUserUnique} = state;

		let {username, password, email, repassword} = this.state.form.fields;

		return (
			<div className="signup-form card">
				<div className="card-block">
					<h4 className="card-title">Create New Account</h4>
					<form onSubmit={e=> {
						e.preventDefault();
						this.submitForm(); }
					}>
						<fieldset className="form-group">
							<label htmlFor="">Username</label>
							{
								showUserUnique &&
								<label className="pull-right">
									<span className={isUserUnique?'text-success': 'text-danger'}>
										{isUserUnique?'Email Available':'Email Taken'}
									</span>
								</label>
							}
							<DelayInput {...getHandler('username')} onTextChange={v => {this.onInputChange('username', v); this.onUsernameChange(v)} } type="email" className="form-control" placeholder="Username" />
						</fieldset>
						<LabelFieldSet label="Email" >
							<input {...getHandler('email')} type="text" value={email} className="form-control" placeholder="Email"/>
							<small className="text-danger help-block">Erros happends</small>
						</LabelFieldSet>
						<LabelFieldSet label="Password" err="password">
							<input {...getHandler('password')} type="password" className="form-control" value={password} placeholder="Password"/>
						</LabelFieldSet>
						<LabelFieldSet label="Re-Passowrd" >
							<input {...getHandler('repassword')} type="password" className="form-control" value={repassword} placeholder="Re-Password" onChange={e => this.onInputChange('repassword', e.target.value)} />
						</LabelFieldSet>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
			)
	}
}


export default connect()(SignupForm);
