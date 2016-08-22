import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';
import {isNodeActive} from '../../../isomorphic/utils/stepUtils';
import {calculateNodePositions} from '../nodePositionHelper';
import colors from '../../styleRoot';
import {Motion, TransitionMotion} from 'react-motion';


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
    	return true;
    }
    render() {
    	let {_id, active, label, disabled, subTitle, level, activeNodes,  childStepsObj,  onNodeClick, index, circle, line, angle, fillColor, svgWidth, svgHeight, isActiveNodeGroup} = this.props;
    	let isRoot = level == 1;

    	const className = `plan-step ${active?'active-step':'not-active-step'}`;

		const smartRenderText = text => {
			let fontSize = svgWidth*(isRoot? 19: level==2? 15: 10)/400;
			let config = {
				textAnchor:'middle',
				x: circle.cx,
				y: circle.cy,
				fill: isRoot?'white': active?fillColor: colors.muted
			}
			config.y += isRoot?20:fontSize/2;

			let styles = {
				fontWeight: level<3? 'bold': 'normal',
				fontSize
			};
			
			if(label.length<=4){
				return <text {...config} style={styles}>{label}</text>
			}

			let half = Math.floor(label.length/2);
			let firstHalf = label.substr(0, half);
			let secondHalf = label.substr(half);
			styles.fontSize -=2;

			return [
				<text {...config} style={styles} y={circle.cy}>{firstHalf}</text>,
				<text {...config} style={styles} y={circle.cy+fontSize}>{secondHalf}</text>
			]
		}

		if(isActiveNodeGroup || active || isRoot) {

	        return (
				<g style={{cursor:'pointer'}} onClick={e=> {
					if(!disabled){
						e.stopPropagation();
						onNodeClick(_id)} 
					}
				}>

						<circle {...circle} strokeWidth={11-2.5*level} stroke={active?'#8F0D17':'gray'} fill={(level==1&&fillColor)||'white'}></circle>

						<line {...line} stroke={active?"#8F0D17":"gray"} strokeWidth="5"></line>
						{
							isRoot&&
							<text textAnchor="middle" x={circle.cx} y={circle.cy-5} style={{
								fontSize:30,
								fontWeight: level <3?'bold': 'normal',
								fontFamily: "cursive"
							}} fill={level==1?'white': fillColor}>{"0"+(index+1)}</text>
						}
						{
							smartRenderText()
						}
						{
							subTitle &&
							<title>{subTitle}</title>
						}
						{
							active&&
							childStepsObj &&
							childStepsObj.map((sp, index) => {
								let result = calculateNodePositions({
									svgHeight,
									svgWidth,
									level: level+1,
									startAngle: angle,
									index,
									nodeCount: childStepsObj.length,
									px: circle.cx,
									py: circle.cy
								})
								return (
									<PlanStep  {...this.props} {...sp} kep={sp._id} activeNodes={activeNodes} onNodeClick={onNodeClick} level={level+1} {...result}/>
								)}
							)
						}
				</g>	

	    	);
	    }
    	else return <g></g>
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
