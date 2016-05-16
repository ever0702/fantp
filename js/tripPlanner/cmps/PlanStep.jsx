import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

const isNodeActive = (paths, nodeId) => {
	for(let [k, v] of Object.entries(paths)) {
		for(let _id of v) {
			if(_id == nodeId)
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
    	let {_id, active, label, isRoot, pathLink, childStepsObj, onNodeClick} = this.props;

        return (
			<div className="plan-step">
				<Card className={active?'active-step': 'not-active-step'} style={{background:'white'}}>
				{JSON.stringify(this.props)}
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
						childStepsObj &&
						childStepsObj.map(sp => <PlanStep {...sp} onNodeClick={onNodeClick} />)
					}
				</Card>
			</div>	

        	
    	);
    }
}

const mapState = (state, ownProps) => {
	let {steps, activePaths} = state.tripPlanner;
	console.log(ownProps.childSteps)
	console.log(steps);


	return {
		childStepsObj: ownProps.childSteps&&ownProps.childSteps.length>0? ownProps.childSteps.map(_id => steps[_id]): null,
		active: isNodeActive(activePaths, ownProps._id),
		isRoot: !ownProps.parentStep,
		pathLink: activePaths[ownProps._id]? activePaths[ownProps._id].map(_id => ({
			_id,
			label: steps[_id].label
		})): null
	};
}

const PlanStep = connect(mapState)(PlanStepRaw);
	
export default PlanStep;
