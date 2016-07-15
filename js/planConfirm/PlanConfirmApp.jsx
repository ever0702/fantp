import React from 'react';
import {connect} from 'react-redux';
import NavContainerShell from '../partials/NavContainerShell';
import {saveTripPlan} from '../tripPlanner/tripPlanActionReducer';
import {spring, Motion, TransitionMotion} from 'react-motion';
import SimpleArrayTransition from '../commonComponents/SimpleTransition';
import {resetTripPlanner} from '../tripPlanner/tripPlanActionReducer';

let values = [];
for(let i = 0; i<10; i++) {
	values.push({
		key: i,
		value: i
	});
}
console.log(values);

@connect()
class PlanConfirmApp extends React.Component {
	
	state = {values};
	constructor(props) {
		super(props);
		this.createNewPlan = this.createNewPlan.bind(this);
	}

	createNewPlan() {
		this.props.dispatch(saveTripPlan());
		this.props.dispatch(resetTripPlanner());
	}
	
	handleAdd(value) {
		let {values} = this.state;
		values = values.push({value});
		this.setState({values});
	}

	render() {
		return (
			<div className="plan-confirm-page-wrapper">
				<NavContainerShell>
					<div className="plan-confirm-page">
						<div className="container">
							<h3>Are you sure to Save your plan?</h3>
							<button onClick={this.createNewPlan} className="btn btn-primary-outline">保存你的规划</button>
						</div>
					</div>

				</NavContainerShell>
			</div>
		)
	}

}

export default PlanConfirmApp;
