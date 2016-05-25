import {tripPlannerActions} from './tripPlannerActions';
import {constructFlatSteps} from '../../isomorphic/utils/stepUtils';

const {
	FETCH_STEP_NODES
} = tripPlannerActions;

const defaultState = {
	flatSteps:null,
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
