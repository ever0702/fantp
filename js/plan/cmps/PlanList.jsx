import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';
import {fetchPlans} from '../planActionReducer';
import TripSummary from '../../tripPlanner/cmps/TripSummary';


@connect(
	state => ({
		planList: state.plan.planList
	})
)
class PlanList extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(fetchPlans());
	}

	render() {
		let {planList, onPlanClick} = this.props;
		return (
			<div className="plan-list">
				{
					planList &&
					planList.map(planItem => (
						<div className="col-md-3" key={planItem._id} onClick={() => {
							onPlanClick(planItem._id);
						}}> 
							<TripSummary btnText="编辑" activeNodes={planItem.activeNodes}></TripSummary>
						</div>
					))
				}
			</div>
		);
	}
}


export default PlanList;
