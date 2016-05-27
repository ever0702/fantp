import {actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';
import {toggleStepNode as toggleStepNodeUtil} from '../../isomorphic/utils/stepUtils';

const planActions = actionConstantHelper({
	sync: ['SET_PLAN_START_FORM', 'TOGGLE_SAVED_STEP_NODE', 'SET_SAVED_PLAN_BASIC_INFO'],
	async: ['FETCH_PLANS', 'FETCH_SINGLE_PLAN', 'SAVE_PLAN_CHANGES']
});

const {SET_PLAN_START_FORM, FETCH_PLANS, TOGGLE_SAVED_STEP_NODE, SAVE_PLAN_CHANGES, FETCH_SINGLE_PLAN, SET_SAVED_PLAN_BASIC_INFO} = planActions;

const fetchSinglePlan = planId => dispatch => asyncActionHelper({
	dispatch,
	actionName: 'FETCH_SINGLE_PLAN',
	url: `plans/${planId}`
});

const toggleSavedStepNode = nodeId => ({
	type: TOGGLE_SAVED_STEP_NODE,
	nodeId	
});

const setPlanStartForm = form => ({
	type: SET_PLAN_START_FORM,
	...form
});

const setSavedPlanBasicInfo = (key, value) => ({
	type: SET_SAVED_PLAN_BASIC_INFO,
	key,
	value
});

const savePlanChanges = () => (dispatch, getState) => {
	let state = getState();
	let {editPlan} = state.plan;
	let {_id, activeNodes, peopleCount, daysCount, averageAge} = editPlan;

	return asyncActionHelper({
		dispatch,
		payload: {
			peopleCount,
			daysCount,
			averageAge,
			activeNodes
		},
		actionName: 'SAVE_PLAN_CHANGES',
		method: 'put',
		url: `plans/${_id}`
	})
};

const fetchPlans = () => dispatch => asyncActionHelper({
	dispatch,
	actionName: 'FETCH_PLANS',
	url: '/plans'
});




const defaultState = {
	planList: null,
	editPlan: null
};

const planReducer = (state = defaultState, action) => {
	switch(action.type) {
		case FETCH_PLANS.SUCCESS: {
			return {
				...state,
				planList: action.data
			};
		}
		case FETCH_SINGLE_PLAN.SUCCESS: {
			return {
				...state,
				editPlan: action.data
			};
		}
		case SET_SAVED_PLAN_BASIC_INFO: {
			return {
				...state,
				editPlan: {
					...state.editPlan,
					[action.key]: action.value
				}
			};
		}
		case SET_PLAN_START_FORM: {
			return {
				...state,
				editPlan: {
					...state.editPlan,
					...action
				}
			};
		}
		case TOGGLE_SAVED_STEP_NODE: {
			let {flatSteps} = action.getState().stepMap;
			let {nodeId} = action;

			return {
				...state,
				editPlan: {
					...state.editPlan,
					activeNodes: toggleStepNodeUtil(flatSteps, nodeId, state.editPlan.activeNodes)
				}
			}
		}
		default: 
			return state;
	}
}


export {planReducer, planActions, setPlanStartForm, fetchPlans, toggleSavedStepNode, fetchSinglePlan, savePlanChanges, setSavedPlanBasicInfo};
