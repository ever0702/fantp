import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';
import TripStepUnit from './TripStepUnit';

@connect()
class TripStep extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		let {stepConfig, onUnitClick} = this.props;
		let {label, subSteps} = stepConfig;
		console.log(onUnitClick)
		console.log(this.props);

		console.log('Trip step re-re')

		return (
				<div className="trip-step">
					<Card title={label}>
					{JSON.stringify(this.props)}
						<TripStepUnit subSteps={subSteps} level={1} onUnitClick={onUnitClick}/>
					</Card>
				</div>
			);
	}
}

TripStep.propTypes = {
	onUnitClick: PropTypes.func.isRequired
}

export default TripStep;
