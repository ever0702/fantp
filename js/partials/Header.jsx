import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const NavBarLink = ({url, label}) => (
		<li className="nav-item">
			<Link className="nav-link" to={url}>{label}</Link>
		</li>
	);

const links = [{
	label: 'Home',
	url: '/home-app'
}, {
	label: 'Todos',
	url: '/todo-app'
},{
	label: 'Signup',
	url: '/signup'
}];

const NavBar = ({loggedIn, username}) => {

	return (
			<nav className="navbar navbar-light bg-faded">
				<button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header"> |||         
		        </button>
		        <div className="collapse navbar-toggleable-xs">
		        	<a href="" className="navbar-brand">React</a>
		        	<ul className="nav navbar-nav">
						{
							links.map(lk => <NavBarLink  key={lk.label} {...lk} />)
						}
						{
							loggedIn &&
							<li className="nav-item">
								<a >{username}</a>
							</li>
						}
		        	</ul>

		        </div>
			</nav>

		)
}


export default connect(
		state => ({
			loggedIn: state.auth.username!=null,
			username: state.auth.username
		})
	)(NavBar);





