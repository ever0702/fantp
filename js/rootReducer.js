import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import bookAppReducer from './book/bookAppReducer';
import githubReducer from './github/githubReducer';
import employeeReducer from './employee/employeeReducer';


if(module.hot) {
    module.hot.accept();
}


const rootReducer = combineReducers({
    bookApp: bookAppReducer,
    githubApp: githubReducer,
    employeeApp: employeeReducer,
    form: formReducer
});

export default rootReducer;
