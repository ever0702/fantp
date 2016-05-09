import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import NavBarLink from './NavBarLink';
import SignHeader from './SignHeader';

const links = [{
	label: 'Home',
	url: '/home-app'
},{
	label: 'Todos',
	url: '/todo-app'
}, {
	label: 'Planner',
	url: '/planner'
}];

const NavBar = ({loggedIn, username, dispatch}) => {

	return (
			<nav className="navbar navbar-fixed-top navbar-default navbar-light" id="navbar">
				<div className="container">
					<button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header"> |||         
			        </button>
			        <div className="collapse navbar-toggleable-xs">
			        	<a href="" className="navbar-brand">
			        		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beats_Electronics_logo.svg/2000px-Beats_Electronics_logo.svg.png" alt=""/>
			        		<span className="navbar-logo">Fantp</span>
			        	</a>
			        	<ul className="nav navbar-nav">
							{
								links.map(lk => <NavBarLink  key={lk.label} {...lk} />)
							}
			        	</ul>

					  	<SignHeader />
			        </div>
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





