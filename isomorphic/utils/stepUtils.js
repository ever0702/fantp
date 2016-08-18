import {randrange} from './genUtils';

const constructFlatSteps = arrayStepTree => {

	let stepArray = arrayStepTree.sort((a, b) => a.order - b.order);
	let flatSteps = {};
	for (let s of stepArray) {
		if (s.childSteps && s.childSteps.length == 0) s.childSteps = null;
		s._id = String(s._id);
		flatSteps[s._id] = s;
	}
	let rootNodes = stepArray.filter(nd => !nd.parentStep).map(nd => nd._id);
	
	let inner = (nodes, ascs = []) => {
		nodes.map(ndId => {
			let curNode = flatSteps[ndId];
			curNode.ascendents = ascs.length==0? null: ascs.map(node => node._id);
			if(curNode.childSteps) {
				let newAscs = [...ascs, curNode];
				for(let asc of newAscs) {
					asc.descendents = (asc.descendents||[] ).concat(curNode.childSteps)
				}
				inner(curNode.childSteps, newAscs);
			} else {
				if(curNode.price == null){
					curNode.price = randrange(50, 350, 25);
				}
				else {
					console.log('00000000000000 has a price:', curNode, curNode.price)
				}
			}
		});
	}
	inner(rootNodes);

	return {
		flatSteps,
		arraySteps: stepArray,
		rootNodes
	}
};

const toggleStepNode = (flatSteps, nodeId, activeNodes) => {
	let curNode = flatSteps[nodeId];

	if(activeNodes.indexOf(nodeId) >= 0) {
		if(curNode.parentStep)	{
			let contains = false;
			for(let an of activeNodes.filter(nd => nd!= nodeId)) {
				if(flatSteps[an].ascendents&&flatSteps[an].ascendents.indexOf(curNode.parentStep) >= 0) {
					contains = true;
					break;
				}
			}
			if(!contains) {
				activeNodes = [...activeNodes, curNode.parentStep];
			}
		}

		return activeNodes.filter(nd => nd != nodeId);
	} 

	if(isNodeActive(flatSteps, nodeId, activeNodes)) {

		return activeNodes.filter(ndId => (!flatSteps[ndId].ascendents || flatSteps[ndId].ascendents.indexOf(nodeId)<0 )).concat(flatSteps[nodeId].parentStep||[]);
	}

	return [...activeNodes, nodeId].filter(nd => (flatSteps[nodeId].ascendents||[]).indexOf(nd)<0 );

};

const isNodeActive = (flatSteps, nodeId, activeNodes) => {
	activeNodes = activeNodes || [];
	let curNode = flatSteps[nodeId];
	if(activeNodes.indexOf(nodeId) >=0 ) return true;

	for(let activeNode of activeNodes) {
		if(flatSteps[activeNode].ascendents && flatSteps[activeNode].ascendents.indexOf(nodeId) >= 0){
			return true;
		}
	}
	return false;
};

export {
	isNodeActive,
	constructFlatSteps,
	toggleStepNode
};
