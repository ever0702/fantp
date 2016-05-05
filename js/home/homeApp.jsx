import React from 'react';
import {connect} from 'react-redux';
import Header from '../partials/Header';

@connect()
class HomeApp extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container-fluid bg-faded" id="home-page" >
				<div className="container">
					<Header />
				</div>
				<div className="container-fluid">
					<div className="jumbotron poster" >
						<div className="container">
							<div className="content">
							<h1 className="header" style={{color:'white'}}>Welcome Back</h1>

							<button className="btn btn-success btn-lg" style={{marginRight: 40}}>Get Started</button>
							<button className="btn btn-primary-outline btn-lg">Learn More...</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}


export default HomeApp;
