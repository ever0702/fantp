import React from 'react';
import './footer.scss';


const Footer = () => (
		
		<div className="footer-section container-fluid">

			<div className="container">

				<div className="row">
					<div className="col-md-3">

						
			        	<a href="" className="footer-brand">
			        		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beats_Electronics_logo.svg/2000px-Beats_Electronics_logo.svg.png" alt=""/>
			        		<span className="footer-logo">React</span>
			        	</a>
					</div>
					<div className="col-md-2">
						<h3 className="nav-title">Company</h3>
						<ul className="nav">
							<li>
								<a href="">About</a>
							</li>
							<li>
								<a href="">Jobs</a>
							</li>
							<li>
								<a href="">Press</a>
							</li>
							<li>
								<a href="">News</a>
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h3 className="nav-title">Communities</h3>
						<ul className="nav">
							<li>
								<a href="">Artists</a>
							</li>
							<li>
								<a href="">Labels</a>
							</li>
							<li>
								<a href="">Developers</a>
							</li>
							<li>
								<a href="">Brands</a>
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h3 className="nav-title">Useful Links</h3>
						<ul className="nav">
							<li>
								<a href="">Help</a>
							</li>
							<li>
								<a href="">Gift</a>
							</li>
							<li>
								<a href="">About</a>
							</li>
							<li>
								<a href="">About</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	)

export default Footer;
