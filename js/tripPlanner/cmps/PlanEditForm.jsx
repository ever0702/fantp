import React from 'react';
import PlanStep from './PlanStep';
import PlanStartForm from './PlanStartForm';

const PlanEditForm = ({rootNodes, flatSteps, activeNodes, onNodeClick}) => (
	<div className="plan-eidt-form">
		<PlanStartForm/>	
		{
			rootNodes && 
			rootNodes.map(sp => (
					<div>
						<PlanStep level={1} key={sp._id} activeNodes={activeNodes} {...sp} onNodeClick={node => onNodeClick(node)} />
					</div>
				))
		}
	</div>	
);

export default PlanEditForm;
