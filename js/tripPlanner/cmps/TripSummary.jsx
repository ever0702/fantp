import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';
import SummaryItem from './SummaryItem';

const isNull = (value, ifIsNullValue) => value!=null?value:ifIsNullValue;

const mapState = state => {

	let {rootNodes, flatSteps} = state.stepMap;
	return {
		rootNodes, flatSteps
	};
}
@connect(mapState)
class TripSummary extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {activeNodes, rootNodes, flatSteps, nextStepClick} = this.props;
		console.log(activeNodes);
		return (
				<div className="trip-summary">
					<Card title="旅程预算">
						{
							rootNodes.map((rn, index) => {
								return <SummaryItem index={index+1} rootId={rn} activeNodes={activeNodes} />
							})
						}
						<button className="btn btn-success btn-block" onClick={nextStepClick}>下一步</button>
					</Card>
				</div>
			);
	}
}

export default TripSummary;
