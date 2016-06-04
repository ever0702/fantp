import React from 'react';
import PlanStep from './PlanStep';
import {calculateNodePositions} from '../nodePositionHelper';

let colors = ['#FCA517', '#F4721C', '#147DAA', '#72B92F', '#049C9D', '#E05248', '#853C83']

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
								<svg width={svgWidth} height={svgHeight} style={{border:"1px solid transparent"}}>
									<PlanStep svgHeight={svgHeight} svgWidth={svgWidth} fillColor={colors[index]} index={index} {...result} level={1} key={sp._id} activeNodes={activeNodes} {...sp} onNodeClick={node => onNodeClick(node)} />
								</svg>
							</div>
						))
				}
			</div>	
		);
};

export default PlanEditForm;
