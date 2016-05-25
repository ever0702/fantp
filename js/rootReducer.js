import { combineReducers } from 'redux';
import employeeReducer from './employee/employeeReducer';
import todoReducer from './todo/todoReducer';
import authReducer from './auth/authReducer';
import tripPlannerReducer from './tripPlanner/tripPlannerReducer';
import stepMapReducer from './tripPlanner/stepMapReducer';
import planReducer from './plan/planReducer';


if(module.hot) {
    module.hot.accept();
}


const rootReducer = combineReducers({
	auth: authReducer,
    employeeApp: employeeReducer,
    todoApp: todoReducer,
    tripPlanner: tripPlannerReducer,
    stepMap: stepMapReducer,
    plan: planReducer
});

export default rootReducer;
