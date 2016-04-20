import React from 'react';
import {Link} from 'react-router';

const NavBarLink = ({url, label}) => (
		<li>
			<Link to={url}>{label}</Link>
		</li>
	);

const links = [{
	label: 'Home',
	url: '/home-app'
}, {
	label: 'Employee',
	url: '/employee-app'
}, {
	label: 'Todos',
	url: '/todo-app'
}];

const NavBar = () => {

	return (

			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a href="" className="navbar-brand">React To Go</a>
					</div>
					
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							{
								links.map(lk => <NavBarLink key={lk.label} {...lk} />) 
							}						
						</ul>
					</div>


				</div>
			</nav>

		)
}



export default NavBar;


