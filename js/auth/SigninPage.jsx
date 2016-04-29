import React, {Component} from 'react';
import {connect} from 'react-redux';
import simpleForm from '../highOrderComponents/simpleForm'
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';
import LabelFieldSet from '../commonComponents/LabelFieldSet';


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
	}
	componentDidMount() {
	}

	render() {
		let {username, password, rememberMe, hasSubmitted, preSubmit} = this.props;

		return (
				<div className="signin-form card">
					<div className="card-block">
						<h4>Sign In</h4>
						<span>{JSON.stringify(this.props)}</span>
						<form  onSubmit= {
							e => {
								e.preventDefault();
								preSubmit();
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


		return (<form>
			<input {...username} />
			<span>{username.error}</span>
			<input {...password} />
			<div>{JSON.stringify(this.props.username)}</div>
			{JSON.stringify(this.props.password)}
			<h3>Hello FOrm</h3>
			<h3>Hello FOrm</h3>
		</form>
		)
	}
}

@connect()
export default class SigninPage extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className="signin-page">
					<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
						<SigninForm />
					</div>
				</div>
			);
	}
}


