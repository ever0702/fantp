import { actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';

const tripPlannerActions = actionConstantHelper({
    sync: ['SET_START_FORM', 'TOGGLE_STEP_NODE', 'EXPAND_ROOT'],
    async: ['FETCH_STEP_NODES', 'SAVE_TRIP_PLAN']
});

const {SET_START_FORM, TOGGLE_STEP_NODE, EXPAND_ROOT, FETCH_STEP_NODES, SAVE_TRIP_PLAN } = tripPlannerActions;

const toggleStepNode = nodeId => ({
    type: TOGGLE_STEP_NODE,
    nodeId
});

const expandRoot = nodeId => ({
    type: EXPAND_ROOT,
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

const saveTripPlan = () => (dispatch, getState) => {
    let state = getState();
    let { tripPlanner } = state;
    let {activeNodes} = state.tripPlanner;
    let peopleCount = tripPlanner.peopleCount? tripPlanner.peopleCount.value: null;
    let daysCount = tripPlanner.daysCount? tripPlanner.daysCount.value: null;
    let averageAge = tripPlanner.averageAge? tripPlanner.averageAge.value: null;

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

export { tripPlannerActions, toggleStepNode, fetchStepNodes, expandRoot, saveTripPlan, setStartForm };
