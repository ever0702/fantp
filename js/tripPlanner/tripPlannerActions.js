import {actionConstantHelper, asyncActionHelper} from '../utils/actionCreateUtil';

const tripPlannerActions = actionConstantHelper({
	sync: ['TOGGLE_STEP_NODE']
});

const {TOGGLE_STEP_NODE} = tripPlannerActions;

const toggleStepNode = nodeId => ({
	type: TOGGLE_STEP_NODE,
	nodeId
});

export {tripPlannerActions, toggleStepNode};
