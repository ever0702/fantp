import React from 'react';
import {Link, IndexLink} from 'react-router';
import colors from '../styleRoot';


const NavBarLink = (props) => (
		<li className="nav-item">
		{
			props.indexLink&&
			<IndexLink activeStyle={props.activeStyle||{color:colors.orange}} {...props} className={props.className +" nav-link" } to={props.url}>{props.children}</IndexLink>
		}
		{
			!props.indexLink&&
			<Link activeStyle={props.activeStyle||{color:colors.orange}} {...props} className={props.className +" nav-link" } to={props.url}>{props.children}</Link>
		}
		</li>
	);

export default NavBarLink;
