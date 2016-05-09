import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

@connect()
class TripStepUnit extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		let {subSteps, onUnitClick, level, ...rest} = this.props;
		console.log('unit props', this.props)
		let activeStep = subSteps.find(sp => sp.active);
		console.log(activeStep, 'active step')
		return (
				<div className="trip-step-unit">
					<div className="row">
					{
						subSteps.map(sp => (
							<button  onClick={e=> {
								e.stopPropagation();
								onUnitClick(sp);
							}}  className="btn btn-primary outline" key={sp.label+sp.id}>{sp.label}</button>	
							))
					}
					</div>
					{
						activeStep && activeStep.subSteps && 	
						<div className="row">
							<Card title="SubStep">
								<TripStepUnit level = {level+1} subSteps={activeStep.subSteps} onUnitClick={onUnitClick} {...rest}/>
							</Card>
						</div>
					}
				</div>
			)
	}
}

export default TripStepUnit;
