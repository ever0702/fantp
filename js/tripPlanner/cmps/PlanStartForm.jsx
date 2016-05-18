import React from 'react';
import Card from '../../commonComponents/Card';
import LabelFieldSet from '../../commonComponents/LabelFieldSet';
import InlineLabelFieldSet from '../../commonComponents/InlineLabelFieldSet';
import indexFormHOC from '../../home/indexFormHOC';

@indexFormHOC()
class PlanStartForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {peopleCount, daysCount, averageAge, hasSubmitted, submitForm} = this.props;
		return (
			<div className="start-form">
				<Card>
					<form className="form-inline" onSubmit={
						e=> {
							e.preventDefault();
							submitForm();
						}
					}>
					<div className="row">
						

					</div>
						<InlineLabelFieldSet label="人数"  err={(hasSubmitted||peopleCount.touched)&&peopleCount.error}>
						      <input className="form-control" type="text" {...peopleCount} placeholder="人数"/>
						</InlineLabelFieldSet>
						<InlineLabelFieldSet label="天数"  err={(hasSubmitted||daysCount.touched)&&daysCount.error}>
						      <input className="form-control" type="text" {...daysCount} placeholder="天数"/>
						</InlineLabelFieldSet>
						<InlineLabelFieldSet label="平均年龄"  err={(hasSubmitted||averageAge.touched)&&averageAge.error}>
						      <input className="form-control" type="text" {...averageAge} placeholder="平均年龄"/>
						</InlineLabelFieldSet>
						  <button className="btn btn-raised btn-primary" type="submit">更新</button>
					</form>	
					
				</Card>
			</div>
		);
	}
}


export default PlanStartForm;
