import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const NavBarLink = (props) => (
		<li className="nav-item">
			<Link {...props} className={props.className +" nav-link" } to={props.url}>{props.label}</Link>
		</li>
	);

const links = [{
	label: 'Home',
	url: '/home-app'
}, {
	label: 'Notes',
	url: '/note-app'
},{
	label: 'Todos',
	url: '/todo-app'
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
		        	</ul>

				  <url className="nav navbar-nav float-right">
				  {
				  	loggedIn &&
				  	[<li className="nav-item">
				  		<a className="nav-link">{username}</a>
				  	</li>,
				  	<NavBarLink label="Signout" url="/signout"></NavBarLink>]
				  }
				  {
				  	!loggedIn &&
				  	[<NavBarLink label="Signin" url="/signin"></NavBarLink>,
				  	<NavBarLink label="Signup" url="/signup"></NavBarLink>]

				  }
				  </url>
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





