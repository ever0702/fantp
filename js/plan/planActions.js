import {actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';

const planActions = actionConstantHelper({
	sync: ['TOGGLE_SAVED_STEP_NODE'],
	async: ['FETCH_PLANS', 'FETCH_SINGLE_PLAN']
});

const {FETCH_PLANS, TOGGLE_SAVED_STEP_NODE} = planActions;

const fetchSinglePlan = planId => dispatch => asyncActionHelper({
	dispatch,
	actionName: 'FETCH_SINGLE_PLAN',
	url: `plans/${planId}`
});

const toggleSavedStepNode = nodeId => ({
	type: TOGGLE_SAVED_STEP_NODE,
	nodeId	
});

const fetchPlans = () => dispatch => asyncActionHelper({
	dispatch,
	actionName: 'FETCH_PLANS',
	url: '/plans'
});

export {planActions, fetchPlans, toggleSavedStepNode, fetchSinglePlan};
