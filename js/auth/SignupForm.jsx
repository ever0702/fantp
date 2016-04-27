import React from 'react';
import {connect} from 'react-redux';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import DelayInput from '../commonComponents/DelayInput';
import {get} from '../utils/httpHelper';
import authService from './auth.service';
import {signup} from './authActions';
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';
import simpleForm from '../highOrderComponents/simpleForm';


// let initData =  get('/todos')
// 		.then(todos => {
// 			return todos.map(td => ({
// 				username: td._id,
// 				password: td.text,
// 				email: td.text
// 			}))[0];
// 		});
let validate = ({email = '', password = '', repassword = ''}) => {
	let errs = {};
	if(email.indexOf('@') == -1){
		errs.email='Please enter a valid Email';
	}

	if(password.length <4) {
		errs.password = 'Password should be at least 4 charactors';
	}
	if(repassword != password) {
		errs.repassword = 'Passwords not match';
	}

	return errs;
}


@connect()
@simpleForm({
	fields: ['username', 'email', 'password', 'repassword'],
	// initData,
	validate
})
export default class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		
		this.setInitState = this.setInitState.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onUsernameChange = this.onUsernameChange.bind(this);

		this.setInitState();
	}

	setInitState() {
		this.state = {
			checkingUnique: false,
			isUserUnique: true,
			showUserUnique: false
		}
	}

	onInputChange = (key, value) => this.setState({
		...this.state,
		[key]: value
	})

	 onUsernameChange= username => {
	 	console.log('on username check called', username)
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
		let {fields, isFormValid, onSignupSuccess} =this.props;
		if(!isFormValid) return;
		const {username, password, email} = fields;
		this.props.dispatch(signup({
			username,
			password,
			email
		})).then(res => onSignupSuccess());
	}

	render(){
		let {getHandler, setState, state} = this;

		let {showUserUnique, isUserUnique} = state;

		let {username, password, email, repassword, hasSubmitted, preSubmit} = this.props;

		return (
			<div className="signup-form card">
				<div className="card-block">
					<h4 className="card-title">Create New Account</h4>
					<form onSubmit={e=> {
						e.preventDefault();
						preSubmit();
						this.submitForm(); 
					}}>
						<span>{JSON.stringify(this.props)}</span>
						<LabelFieldSet label="Username" success={showUserUnique&&isUserUnique&&'Username Available'} err={showUserUnique&&!isUserUnique&&'Username Taken'}>
							<DelayInput {...username} onTextChange={v => { this.onUsernameChange(v)} } type="text" className="form-control" placeholder="Username" />
						</LabelFieldSet>
						<LabelFieldSet label="Email" err={(hasSubmitted||email.touched)&&email.error}>
							<input {...email} type="text"  className="form-control" placeholder="Email"/>
						</LabelFieldSet>
						<LabelFieldSet label="Password" err={(hasSubmitted||password.touched)&&password.error}>
							<input {...password} type="password" className="form-control" placeholder="Password"/>
						</LabelFieldSet>
						<LabelFieldSet label="Re-Passowrd" err={(hasSubmitted||repassword.touched)&&repassword.error} >
							<input {...repassword} type="password" className="form-control" placeholder="Re-Password" />
						</LabelFieldSet>
						<button type="submit" className="btn btn-primary">Submit</button>
						<button  className="btn btn-warning" onClick={e=> {
							e.preventDefault();
							this.props.resetForm(e);
							this.setInitState();
						}}>Reset</button>
					</form>
				</div>
			</div>
			)
	}
}

