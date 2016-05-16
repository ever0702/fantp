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
        this.calculateColClass = this.calculateColClass.bind(this);
    }

    calculateColClass(level, length){
    	let c = 'col-md-' + Math.floor(12/length);
		if(level>=2){
			c='col-md-12';
		}	

		return c;

    }
    render() {
    	let {_id, active, label, subTitle, level, isRoot, pathLink, childStepsObj, onNodeClick} = this.props;

        return (
			<div className="plan-step ">
				<Card className={active?'active-step': 'not-active-step'} style={{borderRadius:level!=1?'10%':''}}>
					<div className="step-label label" style={{color:''}} onClick={e=>{
						onNodeClick(_id);
					}}>{label}
					</div>
					{
						subTitle &&
						<div className="step-subtitle text-muted">{subTitle}</div>
					}
					{
						pathLink&&
						pathLink[0]&&
						pathLink.slice(1).map(pl => <span onClick={e=> {e.stopPropagation(); onNodeClick(pl._id); }} className="path-span label text-primary"><i className="fa fa-play" style={{color:'gray'}}></i>{pl.label}
								{
									pl.subTitle&&
									<span className="text-muted" style={{fontWeight:'normal', color:'gray'}}>{' ('+pl.subTitle+') '}</span>
								}
							</span>)
					}
					<div className="row children-steps">
					{
						active &&
						childStepsObj &&
						childStepsObj.map(sp => (
							<div style={{marginTop:'5px'}} className={this.calculateColClass(level, childStepsObj.length)}>
								<PlanStep {...sp} onNodeClick={onNodeClick} level={level+1}/>
							</div>)
						)
					}
						<div style={{clear:'both'}}></div>
					</div>
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
			subTitle: steps[_id].subTitle,
			label: steps[_id].label
		})): null
	};
}

const PlanStep = connect(mapState)(PlanStepRaw);
	
export default PlanStep;
