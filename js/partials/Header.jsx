import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import NavBarLink from './NavBarLink';
import SignHeader from './SignHeader';


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

const NavBar = ({loggedIn, username, dispatch}) => {

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

				  	<SignHeader />
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





