import React from 'react';
import PlanStep from './PlanStep';
import {calculateNodePositions} from '../nodePositionHelper';
import colors from '../../styleRoot';

let stepColors = ['#FCA517', '#F4721C', '#147DAA', '#72B92F', '#049C9D', '#E05248', '#853C83']

class PlanStepsEditForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeNodeGroup : props.rootNodes&&props.rootNodes[0]._id
		}

		this.mouseOverRoot = this.mouseOverRoot.bind(this);
	}

	mouseOverRoot(id) {
		console.log('mouseover called', id)
		this.setState({
			activeNodeGroup: id
		});
	}

	render() {
		let {rootNodes, svgWidth, svgHeight, flatSteps, activeNodes, onNodeClick} = this.props;

		let result = calculateNodePositions({
			svgWidth,
			svgHeight,
			level: 1,
			startAngle: 0
		});
		return	(
				<div className="plan-eidt-form">
					<div className="" style={{float:"left"}}>
						<svg width={svgWidth} height={svgHeight} style={{border:"1px solid transparent"}}>
							<circle cx={svgWidth/2} cy={svgHeight/2} r={svgHeight*0.13} fill="#C9CACC" stroke={colors.orange} strokeWidth="5"></circle>
							<text textAnchor="middle" x={svgHeight/2} y={svgWidth/2+10} style={{fontSize: 20}} fill={colors.orange}>START</text>
						</svg>
					</div>
					{
						rootNodes && 
						rootNodes.map((sp, index) => (
								<div className="" style={{float:"left"}}>

									<svg width={svgWidth} height={svgHeight} style={{border:"1px solid transparent"}}>
										<PlanStep mouseOverRoot={this.mouseOverRoot} isActiveNodeGroup={sp._id == this.state.activeNodeGroup} svgHeight={svgHeight} svgWidth={svgWidth} fillColor={stepColors[index]} index={index} {...result} level={1} key={sp._id} activeNodes={activeNodes} {...sp} onNodeClick={node => onNodeClick(node)} />
									</svg>
								</div>
							))
					}
				</div>	
			);
	}
}

// const PlanEditForm = ({rootNodes, svgWidth, svgHeight, flatSteps, activeNodes, onNodeClick}) => {
	
// 	let result = calculateNodePositions({
// 		svgWidth,
// 		svgHeight,
// 		level: 1,
// 		startAngle: 0
// 	});
// 	return	(
// 			<div className="plan-eidt-form">
// 				<div className="" style={{float:"left"}}>
// 					<svg width={svgWidth} height={svgHeight} style={{border:"1px solid transparent"}}>
// 						<circle cx={svgWidth/2} cy={svgHeight/2} r={svgHeight*0.13} fill="#C9CACC" stroke={colors.orange} strokeWidth="5"></circle>
// 						<text textAnchor="middle" x={svgHeight/2} y={svgWidth/2+10} style={{fontSize: 20}} fill={colors.orange}>START</text>
// 					</svg>
// 				</div>
// 				{
// 					rootNodes && 
// 					rootNodes.map((sp, index) => (
// 							<div className="" style={{float:"left"}}>

// 								<svg width={svgWidth} height={svgHeight} style={{border:"1px solid transparent"}}>
// 									<PlanStep svgHeight={svgHeight} svgWidth={svgWidth} fillColor={stepColors[index]} index={index} {...result} level={1} key={sp._id} activeNodes={activeNodes} {...sp} onNodeClick={node => onNodeClick(node)} />
// 								</svg>
// 							</div>
// 						))
// 				}
// 			</div>	
// 		);
// };

export default PlanStepsEditForm;
