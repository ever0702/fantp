import {fetchStepNodes} from './tripPlanner/tripPlanActionReducer';

const appInit = dispatch => {
	dispatch(fetchStepNodes());
}

export default appInit;
