import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import NavBarLink from './NavBarLink';
import SignHeader from './SignHeader';

const links = [{
	label: '首页',
	url: '/home'
},{
	label: 'Dashboard',
	url: '/dashboard'
}, {
	label: '路线规划',
	url: '/planner'
}];

const NavBar = ({loggedIn, username, dispatch}) => {

	return (
			<nav className="navbar navbar-fixed-top navbar-default navbar-light" id="navbar">
				<div className="container">
			        <button id="navbar-toggle" className="navbar-toggler hidden-sm-up pull-right" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header" aria-expanded="true">
			          <i className="fa fa-bars" aria-hidden="true"></i>
			        </button>
		        	<a href="" className="navbar-brand media-below-md">
		        		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beats_Electronics_logo.svg/2000px-Beats_Electronics_logo.svg.png" alt=""/>
		        		<span className="navbar-logo">Fantp</span>
		        	</a>
			        <div className="collapse navbar-toggleable-xs" id="navbar-header">
			        	<a href="" className="navbar-brand media-above-md">
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





