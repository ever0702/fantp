import React from 'react';
import Card from '../../commonComponents/Card';
import LabelFieldSet from '../../commonComponents/LabelFieldSet';
import InlineLabelFieldSet from '../../commonComponents/InlineLabelFieldSet';
import indexFormHOC from '../indexFormHOC';
import {setStartForm} from '../../tripPlanner/tripPlanActionReducer';

@indexFormHOC(
	state => ({
		peopleCount: state.tripPlanner.peopleCount,
		daysCount: state.tripPlanner.daysCount,
		averageAge: state.tripPlanner.averageAge
	}),
	(dispatch, form) => dispatch(setStartForm(form))
)
class HomeStartForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {peopleCount, daysCount, averageAge, hasSubmitted, submitForm} = this.props;
		return (
			<div className="start-form">
				<Card title="凡特希私人订制">

					<form onSubmit={
						e=> {
							e.preventDefault();
							submitForm();
						}
					}>
						<InlineLabelFieldSet label="预计旅行人数" divClassName="col-md-6" labelClassName="col-md-6" err={(hasSubmitted||peopleCount.touched)&&peopleCount.error}>
						      <input className="form-control" type="text" {...peopleCount} placeholder="人数"/>
						</InlineLabelFieldSet>
						<InlineLabelFieldSet label="预计旅行天数" divClassName="col-md-6" labelClassName="col-md-6" err={(hasSubmitted||daysCount.touched)&&daysCount.error}>
						      <input className="form-control" type="text" {...daysCount} placeholder="天数"/>
						</InlineLabelFieldSet>
						<InlineLabelFieldSet label="平均年龄" divClassName="col-md-6" labelClassName="col-md-6" err={(hasSubmitted||averageAge.touched)&&averageAge.error}>
						      <input className="form-control" type="text" {...averageAge} placeholder="平均年龄"/>
						</InlineLabelFieldSet>
						  <button className="btn btn-raised btn-primary" type="submit">开始订制</button>
					</form>	
					
				</Card>
			</div>
		);
	}
}


export default HomeStartForm;
