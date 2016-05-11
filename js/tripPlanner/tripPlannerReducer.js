import { tripPlannerActions, toggleTripUnit } from './tripPlannerActions';
import { stepTree, stepFlat } from '../stepConfig';
import { setPropertyWhenNodeChildrenContains } from '../utils/treeUtil';

const { TOGGLE_STEP_NODE } = tripPlannerActions;

const defaultState = {
    steps: stepFlat,
    stepTree: stepTree,
    rootNodes: stepTree.map(node => node.id),
    activePaths: {}
};

const getPathAndRoot = (flatTree, nodeId) => {
	let node = flatTree[nodeId];
	let path = [nodeId];
	let temp = node;
	while(temp.parentStep) {
		let parentId = temp.parentStep;
		path.unshift(parentId);
		temp = flatTree[parentId];
	}
	return {
		root: temp.id,
		path
	}

}

const tripPlannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_STEP_NODE:
            {
                console.log(action);
                let { nodeId } = action;

                let newState = $.extend(true, {}, state);
				newState.steps[nodeId].active = !!!newState.steps[nodeId].active;

				let {root, path} = getPathAndRoot(state.steps, nodeId);
				newState.activePaths[root] = path;
                return newState;
            }
        default:
            return state;
    }
}

export default tripPlannerReducer;
