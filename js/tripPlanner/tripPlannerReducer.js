import { tripPlannerActions, toggleTripUnit } from './tripPlannerActions';
import { stepTree, stepFlat } from '../stepConfig';
import { setPropertyWhenNodeChildrenContains } from '../utils/treeUtil';

const { TOGGLE_STEP_NODE, FETCH_STEP_NODES } = tripPlannerActions;

const defaultState = {
    steps: null,
    stepTree: null,
    rootNodes: null,
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
        case FETCH_STEP_NODES.SUCCESS :{
        	return {
        		...state,
        		steps: action.data,
        		rootNodes: action.data.filter(nd => !nd.parent).map(nd => nd._id)
        	}
        }
        default:
            return state;
    }
}

export default tripPlannerReducer;
