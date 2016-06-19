import { tripPlannerActions, toggleTripUnit, expandRoot, setStartForm } from './tripPlannerActions';
import { setPropertyWhenNodeChildrenContains } from '../utils/treeUtil';
import { toggleStepNode } from '../../isomorphic/utils/stepUtils';

const {
    TOGGLE_STEP_NODE,
    FETCH_STEP_NODES,
    EXPAND_ROOT,
    SET_START_FORM
} = tripPlannerActions;

const defaultState = {
    peopleCount: null,
    daysCount: null,
    averageAge: null,
    activeNodes: []
};

const tripPlannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_START_FORM:
            let {type, ...rest} = action;
            return {
                ...state,
                ...rest
            }
        case TOGGLE_STEP_NODE:
            {
                let { flatSteps } = action.getState().stepMap;
                let {
                    nodeId
                } = action;

                return {
                    ...state,
                    activeNodes: toggleStepNode(flatSteps, nodeId, state.activeNodes)
                };

            }
        default:
            return state;
    }
}

export
default tripPlannerReducer;
