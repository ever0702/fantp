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
	
	getDefaultStyles() {
		return this.state.values.map(item => ({...item, key:String(item.value), style:{height:0, opacity: 1}}));
	}

	handleAdd(value) {
		let {values} = this.state;
		values = values.push({value});
		this.setState({values});
	}
	getStyles() {
		return this.state.values.map(item => {
			return {
				...item,
				key: String(item.value),
				style: {
					height: spring(100),
					opacity: spring(1)
				}
			}
		})		
	}
	
	willEnter() {
	return {
	  height: 0,
	  opacity: 1,
	};
  }

  willLeave() {
	return {
	  height: spring(0),
	  opacity: spring(0),
	};
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
