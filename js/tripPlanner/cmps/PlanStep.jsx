import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

const isNodeActive = (paths, nodeId) => {
	for(let [k, v] of Object.entries(paths)) {
		for(let id of v) {
			if(id == nodeId)
				return true;
		}
	}
	return false;
}

class PlanStepRaw extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	let {_id, active, label, isRoot, pathLink, subSteps, onNodeClick} = this.props;

        return (
			<div className="plan-step">
				<Card className={active?'active-step': 'not-active-step'} style={{background:'white'}}>
					<div className="card-block" onClick={e=>{
						onNodeClick(_id);
					}}>{label}</div>
					{
						pathLink&&
						pathLink[0]&&
						pathLink.slice(1).map(pl => <span><i className="fa fa-play" style={{color:'gray'}}></i>{pl.label}</span>)
					}
					{
						pathLink && 
						<ol className="breadcrumb">
							{
								pathLink.map(path => <li>{path.label}</li>)
							}
						</ol>
					}
					{
						active &&
						subSteps &&
						subSteps.map(sp => <PlanStep {...sp} onNodeClick={onNodeClick} />)
					}
				</Card>
			</div>	

        	
    	);
    }
}

const mapState = (state, ownProps) => {
	let {steps, activePaths} = state.tripPlanner;
	return {
		subSteps: ownProps.childSteps? ownProps.childSteps.map(id => steps[id]): [],
		active: isNodeActive(activePaths, ownProps.id),
		isRoot: !ownProps.parentStep,
		pathLink: activePaths[ownProps.id]? activePaths[ownProps.id].map(id => ({
			id,
			label: steps[id].label
		})): null
	};
}

const PlanStep = connect(mapState)(PlanStepRaw);
	
export default PlanStep;
