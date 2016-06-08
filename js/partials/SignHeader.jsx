import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBarLink from './NavBarLink';
import {signoutSuccess} from '../auth/authActions';
import navHistory from '../utils/navHistory';
import authService from '../auth/auth.service';

@connect(
	state => ({
		loggedIn: state.auth.username,
		username: state.auth.username
	})
)
class SignHeader extends Component {

	constructor(props) {
		super(props);
	}

	signout() {
		let {dispatch} = this.props;

		authService.signout()
			.then(res => {
				dispatch(signoutSuccess());
				navHistory.push('/signin');
			})
	}

	goSettingPage() {
		navHistory.push('/setting');
	}


	render() {
		
		let {loggedIn, username} = this.props;
		let signout = this.signout.bind(this);
		return (
				
				<ul className="nav navbar-nav float-right">
					{
						loggedIn && 
						[
							<li className="nav-item" key="username" onClick={e=> this.goSettingPage()}>
								<a  className="nav-link">{username}</a>
							</li>,
							<li className="nav-item" key="signout" onClick={
								e => {
									e.preventDefault();
									signout();
								}
							}>
								<a  className="nav-link">登出</a>
							</li>
						]
					}
					{
						!loggedIn && 
						[
							<NavBarLink key="signin" url="/signin">登录</NavBarLink>,
							<NavBarLink key="signup" url="/signup">注册</NavBarLink>
						]
					}
				</ul>	
			);
	}
}


export default SignHeader;
