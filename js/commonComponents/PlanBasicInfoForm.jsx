import React from 'react';
import simpleForm from '../highOrderComponents/simpleForm';
import Card from './Card';
import InlineLabelFieldSet from './InlineLabelFieldSet';

const PlanBasicInfoForm = props => {
	let {peopleCountField, daysCountField, averageAgeField, submitForm} = props;	
	return (
		<div className="start-form">
			<Card>
				{JSON.stringify(props) }
				<form className="form-inline" onSubmit={
					e=> {
						e.preventDefault();
						submitForm&&submitForm();
					}
				}>
				<div className="row">
					

				</div>
					<InlineLabelFieldSet label="人数"  err={(peopleCountField.touched)&&peopleCountField.error}>
					      <input className="form-control" type="text" {...peopleCountField} placeholder="人数"/>
					</InlineLabelFieldSet>
					<InlineLabelFieldSet label="天数"  err={(daysCountField.touched)&&daysCountField.error}>
					      <input className="form-control" type="text" {...daysCountField} placeholder="天数"/>
					</InlineLabelFieldSet>
					<InlineLabelFieldSet label="平均年龄"  err={(averageAgeField.touched)&&averageAgeField.error}>
					      <input className="form-control" type="text" {...averageAgeField} placeholder="平均年龄"/>
					</InlineLabelFieldSet>
				</form>	
				
			</Card>
		</div>
	)
};

export default PlanBasicInfoForm;
