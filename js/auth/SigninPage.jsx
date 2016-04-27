import React, {Component} from 'react';
import {connect} from 'react-redux';
import simpleForm from '../highOrderComponents/simpleForm'
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';


@connect()
@simpleForm({
	fields: ['username', 'password'],
	validate
})
class SigninPage extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
	}
	componentDidMount() {
	}

	render() {
		let {username, password} = this.props;

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

const validate = ({username='', password=''}) => {
	let errs = {};
	if(username != 'yong') {
		errs.username = 'Should be yong';
	} 
	if(password != 'wang') {
		errs.password = 'should be wang';
	} 
	return errs;
	
}

export default SigninPage;
