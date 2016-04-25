import React, {Component} from 'react';
import hiForm from '../highOrderComponents/hiForm'
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';

class SigninPage extends Component {
	
	constructor(props) {
		super(props);
		console.log('props in sign in', props)
	}
	componentDidMount() {
	    console.log('Signin  mounttttttt')  
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

const validate = ({username, password}) => {
	let errs = {};
	if(username != 'yong') {
		errs.username = 'Should be yong';
	} else {
		delete errs.username;
	}
	if(password != 'wang') {
		errs.password = 'should be wang';
	} else {
		delete errs.password;
	}

	return errs;
	
}

let After = hiForm({
	fields: ['username', 'password'],
	validate
})(SigninPage );

console.log(After);

export default After;
