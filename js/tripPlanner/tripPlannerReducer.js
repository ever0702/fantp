import { tripPlannerActions, toggleTripUnit } from './tripPlannerActions';
import {stepTree, stepFlat} from '../stepConfig';
import {setPropertyWhenNodeChildrenContains} from '../utils/treeUtil';

const { TOGGLE_TRIP_UNIT } = tripPlannerActions;

const defaultState = {
    steps: stepFlat,
    stepTree: stepTree
};

const tripPlannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_TRIP_UNIT:
            {
                action.unit.active = !!!action.unit.active;
                return $.extend(true, {}, state);
            }
        default:
            return state;
    }
}

export default tripPlannerReducer;
