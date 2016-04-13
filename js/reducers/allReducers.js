import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import contactFilterReducer from './contactFilterReducer';
import visibilityReducer from './visibilityReducer';
import contactReducer from './contactReducer';

const todoApp = combineReducers({
	todos: todoReducer,
	visibilityFilter: visibilityReducer,

	contacts: contactReducer,
	contactFilter: contactFilterReducer
});

export default todoApp;
