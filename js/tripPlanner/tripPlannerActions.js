import {actionConstantHelper, asyncActionHelper} from '../utils/actionCreateUtil';

const tripPlannerActions = actionConstantHelper({
	sync: ['TOGGLE_STEP_NODE'],
	async: ['FETCH_STEP_NODES']
});

const {TOGGLE_STEP_NODE, FETCH_STEP_NODES} = tripPlannerActions;

const toggleStepNode = nodeId => ({
	type: TOGGLE_STEP_NODE,
	nodeId
});

const fetchStepNodes = () => dispatch => asyncActionHelper({
	dispatch,
	actionName: 'FETCH_STEP_NODES',
	url: '/stepNodes'
});

export {tripPlannerActions, toggleStepNode, fetchStepNodes};
