import React from 'react';

import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';


class StoryCard extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {

		return (
				<Card {...this.props}>
					How are you doing today	
				</Card>
			)
	}
}

export default StoryCard;
