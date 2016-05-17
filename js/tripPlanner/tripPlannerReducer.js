import {
    tripPlannerActions,
    toggleTripUnit,
    expandRoot
}
from './tripPlannerActions';
import {
    stepTree,
    stepFlat
}
from '../stepConfig';
import {
    setPropertyWhenNodeChildrenContains
}
from '../utils/treeUtil';

const {
    TOGGLE_STEP_NODE,
    FETCH_STEP_NODES,
    EXPAND_ROOT
} = tripPlannerActions;

const defaultState = {
    steps: null,
    stepTree: null,
    rootNodes: null,
    activePaths: {},
    expandedRoot: null
};

const getPathAndRoot = (flatTree, nodeId) => {
    let node = flatTree[nodeId];
    let path = [nodeId];
    let temp = node;
    console.log(temp)
    while (temp.parentStep) {
        let parentId = temp.parentStep;
        path.unshift(parentId);
        temp = flatTree[parentId];
    }
    console.log(temp._id, path);
    return {
        root: temp._id,
        path
    }

}

const tripPlannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_STEP_NODE:
            {
                console.log(action);
                let {
                    nodeId
                } = action;

                let newState = $.extend(true, {}, state);
                newState.steps[nodeId].active = !!!newState.steps[nodeId].active;

                let {
                    root,
                    path
                } = getPathAndRoot(state.steps, nodeId);
                newState.activePaths[root] = path;
                return newState;
            }
        case EXPAND_ROOT:
            return {
                ...state,
                expandedRoot: action.nodeId==state.expandedRoot?null:action.nodeId
            }
        case FETCH_STEP_NODES.SUCCESS:
            {
                let stepArray = action.data;
                let activePaths = {};
                let steps = {};
                for (let s of stepArray) {
                    if (s.childSteps && s.childSteps.length == 0) s.childSteps = null;
                    s._id = String(s._id);
                    steps[s._id] = s;
                }
                let rootNodes = action.data.filter(nd => !nd.parentStep).map(nd => nd._id);
                rootNodes.forEach(_id => activePaths[_id] = [_id]);

                return {
                    ...state,
                    steps,
                    expandedRoot: stepArray && stepArray[0] ? stepArray[0]._id : null,
                    rootNodes,
                    activePaths
                }
            }
        default:
            return state;
    }
}

export default tripPlannerReducer;
