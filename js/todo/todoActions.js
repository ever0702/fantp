import { actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';

const actionConfig = {
    sync: ['SET_VISIBILITY_FILTER', 'SET_SEARCH_TEXT'],
    async: ['CREATE_TODO', 'FETCH_TODOS', 'TOGGLE_TODO', 'DELETE_TODO', 'SEARCH_TODOS']
}

const todoActions = actionConstantHelper(actionConfig);

const {
	SET_SEARCH_TEXT,
    SET_VISIBILITY_FILTER,
    CREATE_TODO,
    FETCH_TODOS,
    TOGGLE_TODO,
    DELETE_TODO
} = todoActions;

const setVisibilityFilter = value => ({
    type: SET_VISIBILITY_FILTER,
    value
});

const setSearchText = text => ({
	type: SET_SEARCH_TEXT,
	text
});

const searchTodos = search => dispatch => asyncActionHelper({
	dispatch,
	payload: {
		search
	},
	actionName: 'SEARCH_TODOS',
	url: `/todos?search=${search}`
})
// .then(result => ({...result, data: result.data[1]}));

const fetchTodos = () => dispatch => asyncActionHelper({
    dispatch,
    actionName: 'FETCH_TODOS',
    successParamName: 'todos',
    url: '/todos'
});

const createNewTodo = text => dispatch => asyncActionHelper({
    dispatch,
    payload: {
        text
    },
    actionName: 'CREATE_TODO',
    successParamName: 'newTodo',
    method: 'post',
    url: '/todos'
});


const toggleTodo = (id, completed) => dispatch => asyncActionHelper({
    dispatch,
    payload: {
        id,
        completed
    },
    actionName: 'TOGGLE_TODO',
    method: 'PUT',
    url: `/todos/${id}`
});

const deleteTodo = id => dispatch => asyncActionHelper({
    dispatch,
    payload: {
        id
    },
    successParamName: 'todo',
    actionName: 'DELETE_TODO',
    method: 'DELETE',
    url: `/todos/${id}`
});

export { todoActions, fetchTodos, createNewTodo, toggleTodo, deleteTodo, setSearchText , searchTodos, setVisibilityFilter};
