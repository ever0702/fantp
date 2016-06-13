import React from 'react';
import {connect} from 'react-redux';
import NavContainerShell from '../partials/NavContainerShell';
import PlanBasicInfoForm from '../commonComponents/PlanBasicInfoForm';
import PlanEditForm from '../commonComponents/PlanEditForm';
import simpleForm from '../highOrderComponents/simpleForm';
import TripSummary from '../tripPlanner/cmps/TripSummary';
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

	getSvgWidth(passInWidth = this.state.windowWidth) {
		console.log(passInWidth + ' ddd')
		let width = 400;
		if(passInWidth < 600) return passInWidth;
		if(passInWidth < 800) return passInWidth/2;
		if(passInWidth<1400) return passInWidth/3;
		return passInWidth/4;
	}

	render() {
		let {editPlan} = this.props;
		let {onNodeClick, savePlan, onBasicFormValueChange} = this;
		return (
			<NavContainerShell containerType="container-fluid">
				<div className="plan-edit-page">
					<div className="row">
						<div className="col-md-9" ref={elm => this.node=elm}>
							<button className="btn btn-primary-outline" onClick={savePlan}>Save Plan</button>
							<PlanEditForm svgWidth={this.getSvgWidth($(this.node).width())-30} svgHeight={this.getSvgWidth($(this.node).width())-30} {...editPlan} {...this.props.gatherProps('flatSteps', 'rootNodes')} onNodeClick={onNodeClick} onBasicFormValueChange={onBasicFormValueChange}/>
						</div>

						<div className="col-md-3">
							<TripSummary activeNodes={editPlan.activeNodes}></TripSummary>
						</div>
					</div>
				</div>
			</NavContainerShell>
		);
	}
}

export default PlanEditApp;
