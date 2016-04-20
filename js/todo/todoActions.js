import { actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';
import {get, postJSON } from '../utils/httpHelper';

const actionConfig = {
    sync: ['SET_VISIBILITY_FILTER'],
    async: ['CREATE_TODO', 'FETCH_TODOS', 'TOGGLE_TODO']
}

const todoActions = actionConstantHelper(actionConfig);

const {
    SET_VISIBILITY_FILTER,
    CREATE_TODO,
    FETCH_TODOS,
    TOGGLE_TODO
} = todoActions;

const fetchTodos = () => dispatch => {
	return asyncActionHelper({
		dispatch,
		actionName: 'FETCH_TODOS',
		successParamName: 'todos',
		url: '/todos'
	});
}

const createNewTodo = text => dispatch => asyncActionHelper({
	dispatch,
	startActionPayload: {
		text
	},
	requestPayload: {
		text
	},
	actionName: 'CREATE_TODO',
	successParamName: 'newTodo',
	method: 'post',
	url:'/todos'
});


const toggleTodo = (id, completed) => dispatch => asyncActionHelper({
	dispatch,
	startActionPayload: {
		id, 
		completed
	},
	successPayload: {
		id, completed
	},
	requestPayload: {
		id, 
		completed
	},
	actionName: 'TOGGLE_TODO',
	method: 'PUT',
	url: `/todos/${id}`
});

export { todoActions, fetchTodos, createNewTodo, toggleTodo };
