import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import {tripPlannerReducer} from './tripPlanner/tripPlanActionReducer';
import stepMapReducer from './tripPlanner/stepMapReducer';
import {planReducer} from './plan/planActionReducer';


if(module.hot) {
    module.hot.accept();
}


const rootReducer = combineReducers({
	auth: authReducer,
    tripPlanner: tripPlannerReducer,
    stepMap: stepMapReducer,
    plan: planReducer
});

export default rootReducer;
