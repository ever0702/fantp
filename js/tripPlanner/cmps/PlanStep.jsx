import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

const getSubStep = (state, ownProps) => {
	console.log('get sub step call ', state, ownProps);
	return ownProps.childSteps.map(id => state.tripPlanner.steps[id]);
}

@connect(
	(state, ownProps) => ({
		subSteps: getSubStep(state, ownProps)
	})
)
class PlanStep extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
    	let {id, label, subSteps} = this.props;
    	console.log(subSteps)
        return (
			<div className="plan-step">
				<Card title={label} >
				{JSON.stringify(this.props)}
					{
						subSteps &&
						subSteps.map(sp =>  {
							console.log(sp, 'iaaaaan');
							console.log(PlanStep)
							return	<PlanStep {...sp} />
						})
					}
				</Card>
			</div>	

        	
    	);
    }
}

// PlanStep = connect(
// 	(state, ownProps) => ({
// 		subSteps: getSubStep(state, ownProps)
// 	})
// )

export default PlanStep;
