import React from 'react';
import {connect} from 'react-redux';
import PlanStep from './PlanStep';
import PlanStartForm from './PlanStartForm';

const getTopSteps = stepObj => {
	let arr = [];
	for(let [k, v] of Object.entries(stepObj)) {
		if(!v.parentStep){
			arr.push(v);
		}
	}

	return arr;
}


@connect(
	state => ({
		steps: state.tripPlanner.steps,
		topSteps: state.tripPlanner.steps&&getTopSteps(state.tripPlanner.steps),
		loggedIn: state.auth.username,
		activePaths: state.tripPlanner.activePaths,
		expandedRoot: state.tripPlanner.expandedRoot
	})
)
class PlanEditForm extends React.Component {

	constructor(props) {
		super(props);

		this.onToggleNode = this.onToggleNode.bind(this);
		this.onNodeClick = this.onNodeClick.bind(this);
		this.expandRoot = this.expandRoot.bind(this);
	}

	onToggleNode(nd) {
		let {state} = this;
		nd.expand = !!!nd.expand;
		this.forceUpdate();
	}

	onNodeClick(unit) {
		console.log('unit click fired ', unit)
		this.props.dispatch(toggleStepNode(unit));
		this.forceUpdate();
	}

	expandRoot(_id) {
		this.props.dispatch(expandRoot(_id));
	}

	render() {

		let {topSteps, steps, activePaths, expandedRoot} = this.props;

		const isCompleted = sp => {
			if(!activePaths[sp._id] || activePaths[sp._id].length==0) return false;
			let lastItm = activePaths[sp._id][activePaths[sp._id].length-1];
			return steps[lastItm].childSteps==null;
		}
		return (
			<div className="plan-eidt-form">
				<PlanStartForm/>	
				{
					topSteps && 
					topSteps.map(sp => (
							<div>
								<PlanStep completed={isCompleted(sp)} expanded={expandedRoot==sp._id} level={1} key={sp._id} {...sp} onNodeClick={node => onNodeClick(node)} expandRoot={this.expandRoot}/>
							</div>
						))
				}
			</div>	
		);
	}
}


export default PlanEditForm;
