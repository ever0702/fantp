import React from 'react';

import Header from './Header';
import Footer from './Footer';

const NavContainerShell = ({children, containerType='container'}) => (
		<div className="nav-container-shell">
	        <div className="bg-faded" id="top-nav">
	        	<div className={containerType}>
			        <Header />
		        </div>
	       </div>
	        <div className={containerType + "top-margin" }>
			        {children}
	        </div>
		</div>	
	);

export default NavContainerShell;

