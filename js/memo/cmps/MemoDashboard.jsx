import React from 'react';
import {connect} from 'react-redux';
import StoryCard from './StoryCard';

@connect(
	state => ({
		cards: [{
			title: 'Small Cat',
			text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
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
class MemoDashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className="row">
				{
					this.props.cards.filterPipe('').sortPipe('title').map(cd => (
							<div className="col-md-3 col-sm-6" key={cd.title}>
								<StoryCard {...cd} />
							</div>
						))
				}
					<div className="col-md-3 col-sm-6">
						<StoryCard />
					</div>
				</div>
			)
	}
}

export default MemoDashboard;
