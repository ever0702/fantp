import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import employeeReducer from './employee/employeeReducer';
import todoReducer from './todo/todoReducer';
import authReducer from './auth/authReducer';
import tripPlannerReducer from './tripPlanner/tripPlannerReducer';


if(module.hot) {
    module.hot.accept();
}


const rootReducer = combineReducers({
	auth: authReducer,
    employeeApp: employeeReducer,
    todoApp: todoReducer,
    form: formReducer,
    tripPlanner: tripPlannerReducer
});

export default rootReducer;
