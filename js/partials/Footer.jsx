import React from 'react';
import './footer.scss';


const Footer = () => (
		
		<div className="footer-section container-fluid">

			<div className="container">

				<div className="row">
					<div className="col-md-3">

						
			        	<a href="" className="footer-brand">
			        		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beats_Electronics_logo.svg/2000px-Beats_Electronics_logo.svg.png" alt=""/>
			        		<span className="footer-logo">Fantp</span>
			        	</a>
					</div>
					<div className="col-md-2">
						<h3 className="nav-title">公司网址</h3>
						<ul className="nav">
							<li>
								<a href="">www.fantp.com</a>
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h3 className="nav-title">Email</h3>
						<ul className="nav">
							<li>
								<a href="">fantexiuss@gmail.com</a>
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h3 className="nav-title">TEL: 联系电话</h3>
						<ul className="nav">
							<li>
								<a href="">+86-95040492898</a>
							</li>
							<li>
								<a href="">+1-6267680508</a>
							</li>
							<li>
								<a href="">+86-18686029222</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	)

export default Footer;
