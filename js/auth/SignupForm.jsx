import React from 'react';
import {connect} from 'react-redux';
import toastr from 'toastr';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import DelayInput from '../commonComponents/DelayInput';
import {get} from '../utils/httpHelper';
import authService from './auth.service';
import {signupSuccess, signupError} from './authActions';
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
let validate = ({email = '', password = '', repassword = '', agreement=false, gender}) => {
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
	if(!agreement) {
		errs.agreement = 'You much agree to signup';
	}
	if(!gender ) {
		errs.gender='Please select a gender';
	}

	return errs;
}


@connect()
@simpleForm({
	fields: ['username', 'email', 'password', 'repassword', 'agreement', 'gender', 'age'],
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
		let {fields, isFormValid, onSignupSuccess, dispatch} =this.props;
		if(!isFormValid) return;
		const {username, password, email, gender} = fields;
		
		authService.signup({
			username,
			password,
			email,
			gender
		}).then(result => {
			if(result.success) {
				dispatch(signupSuccess(result));
				this.setState({signupErrorMessage: null});
				onSignupSuccess();
			} else {
				this.setState({signupErrorMessage: result.message});
				dispatch(signupError());
			}

		});
	}
	render(){
		
		let {getHandler, setState, state} = this;
		let {showUserUnique, isUserUnique} = state;
		let {username, password, email, repassword, agreement, gender,age, hasSubmitted, preSubmit, resetForm} = this.props;

		return (
			<div className="signup-form card">
				<div className="card-block">
					<h4 className="card-title">Create New Account</h4>
					<form onSubmit={e=> {
						e.preventDefault();
						preSubmit();
						this.submitForm(); 
					}}>
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
						<LabelFieldSet label="Gender" err={(hasSubmitted||agreement.touched)&&gender.error} >
							<div className="radio">
							  <label className="col-md-3">
							    <input {...gender} type="radio" name="gender" value="M"  />
							    Male
							  </label>
							  <label>
							    <input {...gender} type="radio" name="gender" value="F" />
							    Female
							  </label>
							</div>
						</LabelFieldSet>
						<LabelFieldSet err={(hasSubmitted||agreement.touched)&&agreement.error}>
							<div className="checkbox">
							  <label>
							    <input {...agreement} type="checkbox"  />
							    <span>I agree to Term of use</span>
							  </label>
							</div>
						</LabelFieldSet>
						<button type="submit" className="btn btn-primary">Submit</button>
						<button  className="btn btn-warning" style={{marginLeft: '15px'}} onClick={e=> {
							e.preventDefault();
							console.log(resetForm)
							resetForm(e);
							this.setInitState();
						}}>Reset</button>
					</form>
				</div>
			</div>
			)
	}
}

