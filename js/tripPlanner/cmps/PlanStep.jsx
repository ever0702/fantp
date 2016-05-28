import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';
import {isNodeActive} from '../../../isomorphic/utils/stepUtils';


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
    	let {_id, active, label, subTitle, level, activeNodes,  childStepsObj,  onNodeClick} = this.props;

    	const className = `plan-step ${active?'active-step':'not-active-step'}`

        return (
			<div className={className} style={{marginTop:level==1?'15px':null}}>
				<Card className={'level'+level} style={{border: level==1?'2px solid green':null}}>
					{
						level==1 && 
						<i className="fa fa-check-circle complete-icon text-success"></i>
					}
					<div className="cursor-pointer" onClick={e=>{
							// e.preventDefault();
							// if(expandRoot) expandRoot(_id);
						}}>
						<div className="step-label label" style={{color:''}} onClick={e=>{
							// if(level == 1) return;
							onNodeClick(_id);
						}}>
						<a >{label}</a>

						</div>
						{
							subTitle &&
							<div className="step-subtitle text-muted">{subTitle}</div>
						}
						{/*
							pathLink&&
							pathLink[0]&&
							pathLink.slice(1).map(pl => <span className="path-span label text-primary"><i className="fa fa-play" style={{color:'gray'}}></i>{pl.label}
									{
										pl.subTitle&&
										<span className="text-muted" style={{fontWeight:'normal', color:'gray'}}>{' ('+pl.subTitle+') '}</span>
									}
								</span>)
						*/}
					</div>
					<div className="row children-steps">
					{
						// (expanded||level!=1)&&
						active &&
						childStepsObj &&
						childStepsObj.map(sp => (
							<div style={{marginTop:'5px'}} className={this.calculateColClass(level, childStepsObj.length)}>
								<PlanStep {...sp} activeNodes={activeNodes} onNodeClick={onNodeClick} level={level+1}/>
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
	let {flatSteps} = state.stepMap;
	let {activeNodes} = ownProps||[];

	return {
		childStepsObj: ownProps.childSteps&&ownProps.childSteps.length>0? ownProps.childSteps.map(_id => flatSteps[_id]): null,
		active: isNodeActive(flatSteps, ownProps._id, activeNodes),
		isRoot: !ownProps.parentStep
	};
}

const PlanStep = connect(mapState)(PlanStepRaw);
	
export default PlanStep;
