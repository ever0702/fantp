import React from 'react';
import {connect} from 'react-redux';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Card from '../commonComponents/Card';
import './homeApp.scss';
import HomeStartForm from './cmps/HomeStartForm';
import navHistory from '../utils/navHistory';
import {USER} from '../../isomorphic/constants/userRoles';

@connect(

		state => ({
			cards: [{
				title: 'Small Cat',
				text: 'Some  example text to build on the card title and make up the bulk of the card content.',
				imgSrc: 'https://i.ytimg.com/vi/nomNd-1zBl8/maxresdefault.jpg'
			}, {
				title: 'Big Cat',
				text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
				imgSrc: 'http://splashanddashfordogs.com/wp-content/uploads/2014/07/Dog-2.jpg'
			}, {
				title: 'Menium Cat',
				text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
				imgSrc: 'https://i.ytimg.com/vi/nomNd-1zBl8/maxresdefault.jpg'
			}, {
				title: 'Hello Cat',
				text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
				imgSrc: 'http://splashanddashfordogs.com/wp-content/uploads/2014/07/Dog-2.jpg'
			}, {
				title: 'Small Cat another',
				text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
				imgSrc: 'https://www.petfinder.com/wp-content/uploads/2012/11/152177319-declawing-cats-632x475-e1354303246526-632x353.jpg'
			}, {
				title: 'Small Cat hey',
				text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
				imgSrc: 'https://www.petfinder.com/wp-content/uploads/2012/11/152177319-declawing-cats-632x475-e1354303246526-632x353.jpg'
			}]
		})
	)
class HomeApp extends React.Component {
	constructor(props) {
		super(props);
		this.onHomeStartFormSuccess = this.onHomeStartFormSuccess.bind(this);
	}
	onHomeStartFormSuccess(){
		navHistory.push('/planner');
	}
	render() {
		return (
			<div className="bg-faded" id="home-page" >
				<div className="container">
					<Header />
				</div>
					<div className="jumbotron poster" >
						<div className="container">
							<div className="start-form-wrap col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
								<HomeStartForm onHomeStartFormSuccess={this.onHomeStartFormSuccess} />
							</div>
						</div>
					</div>
					
					<div className="content-section bg-purple">

						<div className="container" >

							{
								this.props.cards.map((cd, inx) => (
										<div className="col-md-3" key={cd.title} >
											<Card {...cd} />
										</div>
									))
							}
							<div className="col-md-3">
								<div className="card">
								  <img className="card-img-top" src="http://splashanddashfordogs.com/wp-content/uploads/2014/07/Dog-2.jpg" alt="Card image cap" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
								  </div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card">
								  <img className="card-img-top" src="https://i.ytimg.com/vi/nomNd-1zBl8/maxresdefault.jpg" alt="Card image cap" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
								  </div>
								</div>
							</div>
						</div>
					</div>


				<Footer />
			</div>
			);
	}
};

export default HomeApp;
