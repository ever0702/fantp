import React from 'react';
import {Link} from 'react-router';


const NavBarLink = (props) => (
		<li className="nav-item">
			<Link {...props} className={props.className +" nav-link" } to={props.url}>{props.label}</Link>
		</li>
	);

export default NavBarLink;
