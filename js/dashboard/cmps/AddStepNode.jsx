import React from 'react';
import {connect} from 'react-redux';
import simpleForm from '../../highOrderComponents/simpleForm';
import Card from '../../commonComponents/Card';
import LabelFieldSet from '../../commonComponents/LabelFieldSet';
import stepNodeService from '../stepNode.service';

@connect()
@simpleForm({
	fields:['label', 'order','subTitle', 'parentId']
})
class AddStepNode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.submitForm = this.submitForm.bind(this);
		this.fetchStepNodes = this.fetchStepNodes.bind(this);
	}

	fetchStepNodes() {
		stepNodeService.getStepNodes().then(nodes => this.setState({stepNodes: nodes}));
	}
	
	submitForm() {
		let {fields} = this.props;
		let {label, order, subTitle, parentId} = fields;
		let {fetchStepNodes} = this;
		
		stepNodeService.createStepNode({label, order, subTitle, parent: parentId})
			.then(result => console.log(result))
			.then( fetchStepNodes);


	}
	
	render() {
		let {label, order, subTitle, parentId, preSubmit} = this.props;

		let {stepNodes} = this.state;

		return (
			<div className="mui">
				<Card className="card shadow" title="Create Step">
					{JSON.stringify(this.props)}
					<form onSubmit={
						e => {
							e.preventDefault();
							preSubmit();
							this.submitForm();
						}
					}>
						<LabelFieldSet label="Label">
							<input type="text" {...label} className="form-control" />	
						</LabelFieldSet>	
						<LabelFieldSet label="SubTitle">
							<input type="text" {...subTitle} className="form-control" />	
						</LabelFieldSet>	
						<LabelFieldSet label="order">
							<input type="text" {...order} className="form-control" />	
						</LabelFieldSet>	
						<LabelFieldSet label="parentId">
							<input type="text" {...parentId} className="form-control" />	
						</LabelFieldSet>	
						<button className="btn btn-primary-outline">Add StepNode</button>
					</form>	
					{
						stepNodes&&
						stepNodes.map(sn => <p>{JSON.stringify(sn)}</p>)
					}
				</Card>
			</div>
		);
	}

}

export default AddStepNode;
