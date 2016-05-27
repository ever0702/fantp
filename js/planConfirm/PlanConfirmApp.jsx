import React from 'react';
import {connect} from 'react-redux';
import NavContainerShell from '../partials/NavContainerShell';
import {saveTripPlan} from '../tripPlanner/tripPlanActionReducer';

@connect()
class PlanConfirmApp extends React.Component {
	
	constructor(props) {
		super(props);
		this.createNewPlan = this.createNewPlan.bind(this);
	}

	createNewPlan() {
		this.props.dispatch(saveTripPlan());
	}

	render() {
		return (
			<div className="plan-confirm-page-wrapper">
				<NavContainerShell>
					<div className="plan-confirm-page">
						<div className="container">
							THIS IS THE Confirm page
							<button onClick={this.createNewPlan} className="btn btn-primary-outline">保存你的规划</button>
						</div>
					</div>

				</NavContainerShell>
			</div>
		)
	}

}

export default PlanConfirmApp;
