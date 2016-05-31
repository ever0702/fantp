import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';
import {fetchPlans} from '../planActionReducer';


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
				<h3>Hello Plan List</h3>
				{
					planList &&
					planList.map(planItem => (
						<Card key={planItem._id} onClick={() => {
							onPlanClick(planItem._id);
						}}>{JSON.stringify(planItem)} </Card>
					))
				}
			</div>
		);
	}
}


export default PlanList;
