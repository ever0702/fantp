import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

@connect(
	state => ({
		flatSteps: state.stepMap.flatSteps
	})
)
class SummaryItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		let {rootId, index, flatSteps, activeNodes} = this.props;
		return (
			<Card className="summary-item">
				<div className="title">{'0'+index} {flatSteps[rootId].label}</div>
				{
					flatSteps[rootId].descendents
						.filter(dc => activeNodes.indexOf(dc) >= 0)
						.map(id => <div>{flatSteps[id].label}</div>)
				}
			</Card>	
		);
	}

}

export default SummaryItem;
