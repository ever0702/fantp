import {tripPlannerActions} from './tripPlanActionReducer';
import {constructFlatSteps} from '../../isomorphic/utils/stepUtils';

const {
	FETCH_STEP_NODES
} = tripPlannerActions;

const defaultState = {
	flatSteps:{
		activeNodes: []
	},
	arraySteps : [],
	rootNodes: []
};

const stepMapReducer = (state = defaultState, action ) => {

	switch(action.type) {
		case FETCH_STEP_NODES.SUCCESS: {
			return {
				...state,
				...constructFlatSteps(action.data)
			};

		}
		default:
			return state;
	}
}

export default stepMapReducer;
