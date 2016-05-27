import React from 'react';
import {connect} from 'react-redux';
import NavContainerShell from '../partials/NavContainerShell';
import PlanBasicInfoForm from '../commonComponents/PlanBasicInfoForm';
import PlanEditForm from '../commonComponents/PlanEditForm';
import simpleForm from '../highOrderComponents/simpleForm';
import {fetchSinglePlan, toggleSavedStepNode, savePlanChanges, setPlanStartForm, setSavedPlanBasicInfo} from './planActionReducer';
import './planApp.scss';


@connect(
	state => ({
		editPlan: state.plan.editPlan,
		flatSteps: state.stepMap.flatSteps,
		rootNodes: state.stepMap.rootNodes.map(id => state.stepMap.flatSteps[id])
	})
)
@simpleForm({
	fields: ['daysCountField', 'daysCountField', 'averageAgeField']
})
class PlanEditApp extends React.Component {
	constructor(props) {
		super(props);

		this.onNodeClick = this.onNodeClick.bind(this);
		this.savePlan = this.savePlan.bind(this);
		this.onBasicFormValueChange = this.onBasicFormValueChange.bind(this);
	}

	onNodeClick(nodeId) {
		this.props.dispatch(toggleSavedStepNode(nodeId));
	}

	componentDidMount() {
		const { planId } = this.props.params;      
		if(planId) {
			this.props.dispatch(fetchSinglePlan(planId));
		}
	}

	onBasicFormValueChange(key, value) {
		this.props.dispatch(setSavedPlanBasicInfo(key, value));
	}

	savePlan() {
		this.props.dispatch(savePlanChanges());
	}

	render() {
		let {editPlan} = this.props;
		let {onNodeClick, savePlan, onBasicFormValueChange} = this;
		return (
			<NavContainerShell>
				<div className="plan-edit-page">
					<button className="btn btn-primary-outline" onClick={savePlan}>Save Plan</button>
					<PlanEditForm {...editPlan} {...this.props.sliceProps('flatSteps', 'rootNodes')} onNodeClick={onNodeClick} onBasicFormValueChange={onBasicFormValueChange}/>
				</div>
			</NavContainerShell>
		);
	}
}

export default PlanEditApp;
