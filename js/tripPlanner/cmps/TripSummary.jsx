import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

@connect()
class TripSummary extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className="trip-summary">
					<Card title="Trip Summary">
						I am some content
					</Card>
				</div>
			);
	}
}

export default TripSummary;
