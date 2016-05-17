import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

const isNull = (value, ifIsNullValue) => value!=null?value:ifIsNullValue;

const mapState = state => {
	let {rootNodes, activePaths, steps} = state.tripPlanner;
	let paths = isNull(rootNodes, []).map(nd => ({
			root: steps[nd], 
			path:isNull(activePaths[nd], []).map(ph => ({
				id: steps[ph].id,
				label: steps[ph].label
			})) 
		})
	);
	return {
		paths
	};
}
@connect(mapState)
class TripSummary extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {paths, nextStepClick} = this.props;
		console.log(paths);
		return (
				<div className="trip-summary">
					<Card title="Trip Summary">
						I am some content
						{
							paths.map(ph => (
								<p>{
									ph.path.map(node => <button>{node.label}</button>)
								}</p>
							))
						}	
						<button className="btn btn-success btn-block" onClick={nextStepClick}>下一步</button>
					</Card>
				</div>
			);
	}
}

export default TripSummary;
