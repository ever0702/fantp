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
import Card from '../commonComponents/Card';


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
		errs.email='请输入合法的邮箱';
	}

	if(password.length <4) {
		errs.password = '密码不得低于8位';
	}
	if(repassword != password) {
		errs.repassword = '密码不匹配';
	}
	// if(!agreement) {
	// 	errs.agreement = 'You much agree to signup';
	// }
	// if(!gender ) {
	// 	errs.gender='Please select a gender';
	// }

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
		let {username, password, email, repassword, agreement, gender,age, hasSubmitted, preSubmit, resetForm, ...rest} = this.props;

		return (
			<div className="mui">
				<Card className="signup-form card shadow" {...rest} title="创建账号">
						<form onSubmit={e=> {
							e.preventDefault();
							preSubmit();
							this.submitForm(); 
						}}>
							<LabelFieldSet label="邮箱" success={showUserUnique&&isUserUnique&&'该邮箱可以注册'} err={showUserUnique&&!isUserUnique&&'该邮箱已被注册'}>
								<DelayInput {...email} onTextChange={v => { this.onUsernameChange(v)} } type="text" className="form-control" placeholder="请输入邮箱" />
							</LabelFieldSet>
							<LabelFieldSet label="姓名" err={(hasSubmitted||username.touched)&&username.error}>
								<input {...username} type="text"  className="form-control" placeholder="请输入姓名"/>
							</LabelFieldSet>
							<LabelFieldSet label="密码" err={(hasSubmitted||password.touched)&&password.error}>
								<input {...password} type="password" className="form-control" placeholder="请输入密码"/>
							</LabelFieldSet>
							<LabelFieldSet label="确认密码" err={(hasSubmitted||repassword.touched)&&repassword.error} >
								<input {...repassword} type="password" className="form-control" placeholder="请再次输入密码" />
							</LabelFieldSet>
							{/*<LabelFieldSet label="Gender" err={(hasSubmitted||agreement.touched)&&gender.error} >
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
							*/}
							<button type="submit" className="btn btn-primary-outline" onClick={e=> {
								preSubmit();
								this.submitForm();
							}}>注册</button>
							<button  className="btn btn-warning-outline" style={{marginLeft: '15px'}} onClick={e=> {
								e.preventDefault();
								console.log(resetForm)
								resetForm(e);
								this.setInitState();
							}}>重置</button>
						</form>
				</Card>
			</div>
			)
	}
}

