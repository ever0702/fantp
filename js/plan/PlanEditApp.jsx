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
	state = {windowWidth: window.innerWidth};
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
		window.addEventListener('resize', this.handleResize);
	}

	onBasicFormValueChange(key, value) {
		this.props.dispatch(setSavedPlanBasicInfo(key, value));
	}

	savePlan() {
		this.props.dispatch(savePlanChanges());
	}

	handleResize(){
		this.setState({windowWidth: window.innerWidth});
	}

	componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize);
	}

	getSvgWidth() {
		let width = 400;
		let {windowWidth} = this.state;
		if(windowWidth < 600) return windowWidth;
		if(windowWidth < 800) return windowWidth/2;
		if(windowWidth<1400) return windowWidth/3;
		return windowWidth/4;
	}

	render() {
		let {editPlan} = this.props;
		let {onNodeClick, savePlan, onBasicFormValueChange} = this;
		return (
			<NavContainerShell containerType="container-fluid">
				<div className="plan-edit-page">
					<button className="btn btn-primary-outline" onClick={savePlan}>Save Plan</button>
					<PlanEditForm svgWidth={this.getSvgWidth()-30} svgHeight={this.getSvgWidth()-30} {...editPlan} {...this.props.gatherProps('flatSteps', 'rootNodes')} onNodeClick={onNodeClick} onBasicFormValueChange={onBasicFormValueChange}/>
				</div>
			</NavContainerShell>
		);
	}
}

export default PlanEditApp;
