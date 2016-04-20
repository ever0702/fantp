import { todoActions } from './todoActions';

const {
    SET_VISIBILITY_FILTER,
    CREATE_TODO,
    FETCH_TODOS,
    TOGGLE_TODO
} = todoActions;

const initState = {
    todos: []
};

const todoReducer = (state = initState, action) => {

    switch (action.type) {
        case FETCH_TODOS.SUCCESS:
            return {
                ...state,
                todos: action.todos
            };
        case CREATE_TODO.SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.newTodo]
            };
        case TOGGLE_TODO.SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id == action.id ? {
                    ...todo,
                    completed: action.completed
                } : todo)
            }
        default:
            return state;
    }
}

export default todoReducer;
