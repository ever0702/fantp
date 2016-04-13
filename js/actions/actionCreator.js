import actionTypes from './actionConstants';


let nextTodoId = 0;

const addTodo = (text) => ({
	type:actionTypes.ADD_TODO,
	id: nextTodoId ++,
	text
});

const toggleTodo = todoId => ({
	type: actionTypes.TOGGLE_TODO,
	todoId
});

const setVisibilityFilter = filter => ({
	type: actionTypes.SET_VISIBILITY_FILTER,
	filter
});

export {addTodo, toggleTodo, setVisibilityFilter};



