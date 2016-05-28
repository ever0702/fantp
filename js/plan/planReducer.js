import {planActions} from './planActions';
import {toggleStepNode} from '../../isomorphic/utils/stepUtils';
const {FETCH_PLANS, FETCH_SINGLE_PLAN, TOGGLE_SAVED_STEP_NODE} = planActions;

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
		case TOGGLE_SAVED_STEP_NODE: {
			let {flatSteps} = action.getState().stepMap;
			let {nodeId} = action;

			return {
				...state,
				editPlan: {
					...state.editPlan,
					activeNodes: toggleStepNode(flatSteps, nodeId, state.editPlan.activeNodes)
				}
			}
		}
		default: 
			return state;
	}
}

export default planReducer;
