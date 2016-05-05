import React from 'react';

import Header from './Header';

const NavContainerShell = ({children}) => (
		<div className="nav-container-shell">
	        <div className="container-fluid bg-faded" id="top-nav">
	        	<div className="container">
			        <Header />
		        </div>
	       </div>
	        <div className="container top-margin">
			        {children}
	        </div>
		</div>	
	);

export default NavContainerShell;

