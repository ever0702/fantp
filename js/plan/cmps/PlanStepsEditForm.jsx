import React from 'react';
import PlanStep from './PlanStep';
import {calculateNodePositions} from '../nodePositionHelper';

const PlanEditForm = ({rootNodes, flatSteps, activeNodes, onNodeClick}) => {
	
	let result = calculateNodePositions({
		svgWidth: 300,
		svgHeight: 300,
		level: 1,
		startAngle: 0
	});
	return	(
			<div className="plan-eidt-form">
				{
					rootNodes && 
					rootNodes.map(sp => (
							<div>
								<svg width="300" height="300" style={{border:"3px solid orange", background:"white"}}>
									<PlanStep {...result} level={1} key={sp._id} activeNodes={activeNodes} {...sp} onNodeClick={node => onNodeClick(node)} />
								</svg>
							</div>
						))
				}
			</div>	
		);
};

export default PlanEditForm;
