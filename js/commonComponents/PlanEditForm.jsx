import React from 'react';
import Card from './Card';
import InlineLabelFieldSet from './InlineLabelFieldSet';
import PlanStepsEditForm from '../plan/cmps/PlanStepsEditForm.jsx'

const PlanEditForm = props => {

	let {onBasicFormValueChange, peopleCount, daysCount, averageAge, activeNodes, flatSteps, onNodeClick} = props;
	
	return (
		<div className="plan-eidt-form">
			<div className="start-form">
					
				<Card>
					<InlineLabelFieldSet label="人数">
					      <input className="form-control" type="text" onChange={
					      	e=> onBasicFormValueChange('peopleCount', e.target.value)
					      } value={peopleCount} placeholder="人数"/>
					</InlineLabelFieldSet>
					<InlineLabelFieldSet label="天数">
					      <input className="form-control" type="text" onChange={
					      	e=> onBasicFormValueChange('daysCount', e.target.value)
					      } value={daysCount} placeholder="天数"/>
					</InlineLabelFieldSet>
					<InlineLabelFieldSet label="平均年龄">
					      <input className="form-control" type="text" onChange={
					      	e => onBasicFormValueChange('averageAge', e.target.value)
					      } value={averageAge} placeholder="平均年龄"/>
					</InlineLabelFieldSet>
					  <button className="btn btn-raised btn-primary" type="submit">更新</button>
					
				</Card>
			</div>
			<PlanStepsEditForm {...props}></PlanStepsEditForm>
		</div>
	);


}

export default PlanEditForm;
