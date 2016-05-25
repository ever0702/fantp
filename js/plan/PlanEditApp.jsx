import React from 'react';
import {connect} from 'react-redux';
import PlanEditForm from '../tripPlanner/cmps/PlanEditForm';
import {fetchSinglePlan} from './planActions';
import NavContainerShell from '../partials/NavContainerShell';
import {toggleSavedStepNode} from './planActions';
import './planApp.scss';


@connect(
	state => ({
		editPlan: state.plan.editPlan,
		flatSteps: state.stepMap.flatSteps,
		rootNodes: state.stepMap.rootNodes.map(id => state.stepMap.flatSteps[id])
	})
)
class PlanEditApp extends React.Component {
	constructor(props) {
		super(props);

		this.onNodeClick = this.onNodeClick.bind(this);
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

	render() {
		let {editPlan, ...rest} = this.props;
		let {onNodeClick} = this;
		return (
			<NavContainerShell>
				<div className="plan-edit-page">
					<PlanEditForm {...rest} onNodeClick={onNodeClick}/>
				</div>
			</NavContainerShell>
		);
	}
}

export default PlanEditApp;
