import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import {tripPlannerReducer} from './tripPlanner/tripPlanActionReducer';
import stepMapReducer from './tripPlanner/stepMapReducer';
import {planReducer} from './plan/planActionReducer';
import {settingReducer} from './setting/settingActionReducer';


if(module.hot) {
    module.hot.accept();
}


const rootReducer = combineReducers({
	auth: authReducer,
    tripPlanner: tripPlannerReducer,
    stepMap: stepMapReducer,
    plan: planReducer,
    setting: settingReducer
});

export default rootReducer;
