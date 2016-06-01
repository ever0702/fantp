import React from 'react';
import PlanStep from './PlanStep';
import {calculateNodePositions} from '../nodePositionHelper';

const PlanEditForm = ({rootNodes, svgWidth, svgHeight, flatSteps, activeNodes, onNodeClick}) => {
	
	let result = calculateNodePositions({
		svgWidth,
		svgHeight,
		level: 1,
		startAngle: 0
	});
	return	(
			<div className="plan-eidt-form">
				{
					rootNodes && 
					rootNodes.map((sp, index) => (
							<div className="" style={{float:"left"}}>
								<svg width={svgWidth} height={svgHeight} style={{border:"1px solid black"}}>
									<PlanStep index={index} {...result} level={1} key={sp._id} activeNodes={activeNodes} {...sp} onNodeClick={node => onNodeClick(node)} />
								</svg>
							</div>
						))
				}
			</div>	
		);
};

export default PlanEditForm;
