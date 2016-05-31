import { actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';
import { setPropertyWhenNodeChildrenContains } from '../utils/treeUtil';
import { toggleStepNode as toggleStepNodeUtil } from '../../isomorphic/utils/stepUtils';

const tripPlannerActions = actionConstantHelper({
    sync: ['SET_START_FORM', 'TOGGLE_STEP_NODE', 'SET_PLAN_BASIC_FORM_VALUE'],
    async: ['FETCH_STEP_NODES', 'SAVE_TRIP_PLAN']
});

const {SET_START_FORM, TOGGLE_STEP_NODE, FETCH_STEP_NODES, SAVE_TRIP_PLAN, SET_PLAN_BASIC_FORM_VALUE } = tripPlannerActions;

const toggleStepNode = nodeId => ({
    type: TOGGLE_STEP_NODE,
    nodeId
});

const fetchStepNodes = () => dispatch => asyncActionHelper({
    dispatch,
    actionName: 'FETCH_STEP_NODES',
    url: '/stepNodes'
});

const setStartForm = form => ({
	type: SET_START_FORM,
	...form
});

const setPlanBasicFormValue = (key, value) => ({
    type: SET_PLAN_BASIC_FORM_VALUE,
    key, 
    value
})

const saveTripPlan = () => (dispatch, getState) => {
    let state = getState();
    let { tripPlanner } = state;
    let {activeNodes} = state.tripPlanner;
    let peopleCount = tripPlanner.peopleCount;
    let daysCount = tripPlanner.daysCount;
    let averageAge = tripPlanner.averageAge;

    return asyncActionHelper({
        dispatch,
        payload: {
            activeNodes,
            peopleCount,
            daysCount,
            averageAge
        },
        actionName: 'SAVE_TRIP_PLAN',
        url: '/plans',
        method: 'post'
    })

};



const defaultState = {
    peopleCount: null,
    daysCount: null,
    averageAge: null,
    activeNodes: []
};

const tripPlannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_START_FORM:
            return {
                ...state,
                ...action
            }
        case SET_PLAN_BASIC_FORM_VALUE: {
            return {
                ...state,
                [action.key]: action.value
            }
        }
        case TOGGLE_STEP_NODE:
            {
                let { flatSteps } = action.getState().stepMap;
                let {
                    nodeId
                } = action;

                return {
                    ...state,
                    activeNodes: toggleStepNodeUtil(flatSteps, nodeId, state.activeNodes)
                };

            }
        default:
            return state;
    }
}

export {tripPlannerReducer, tripPlannerActions, toggleStepNode, fetchStepNodes, saveTripPlan, setStartForm, setPlanBasicFormValue };
