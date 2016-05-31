import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';
import {isNodeActive} from '../../../isomorphic/utils/stepUtils';
import {calculateNodePositions} from '../nodePositionHelper';


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
    shouldComponentUpdate(nextProps, nextState) {
    	// return nextProps.active!=this.props.active;      
    	// return nextProps!=this.props;
    	return true;
    }
    render() {
    	let {_id, active, label, subTitle, level, activeNodes,  childStepsObj,  onNodeClick, circle, line, angle, svgWidth, svgHeight} = this.props;

    	const className = `plan-step ${active?'active-step':'not-active-step'}`

        return (
			<g >

					<circle onClick={e=> onNodeClick(_id)} {...circle} fill={active?'green':level==1?'red': level==2?'yellow': 'blue'}></circle>
					<line {...line} stroke="purple"></line>
					{
						// (expanded||level!=1)&&
						active&&
						childStepsObj &&
						childStepsObj.map((sp, index) => {
							let result = calculateNodePositions({
								svgHeight: 300,
								svgWidth: 300,
								level: level+1,
								startAngle: angle,
								index,
								nodeCount: childStepsObj.length,
								px: circle.cx,
								py: circle.cy
							})
							console.log('this is the result ', result)
							return (
								<PlanStep  {...this.props} {...sp} activeNodes={activeNodes} onNodeClick={onNodeClick} level={level+1} {...result}/>
							)}
						)
					}
			</g>	

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
