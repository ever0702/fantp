import {actionConstantHelper, asyncActionHelper} from '../utils/actionCreateUtil';

const tripPlannerActions = actionConstantHelper({
	sync: ['TOGGLE_STEP_NODE', 'EXPAND_ROOT'],
	async: ['FETCH_STEP_NODES', 'SAVE_TRIP_PLAN']
});

const {TOGGLE_STEP_NODE, EXPAND_ROOT, FETCH_STEP_NODES, SAVE_TRIP_PLAN} = tripPlannerActions;

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

const saveTripPlan = paths => {

	let pathArray = [];
	for(let v of Object.values(paths)) pathArray.push(v);

	return dispatch => asyncActionHelper({
		dispatch,
		payload: {
			paths: pathArray
		},
		actionName: 'SAVE_TRIP_PLAN',
		url: '/tripPlans',
		method: 'post'
	})
}

export {tripPlannerActions, toggleStepNode, fetchStepNodes, expandRoot, saveTripPlan};
