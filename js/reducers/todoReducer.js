import actionTypes from '../actions/actionConstants';

const todoReducer = (state = [], action) => {

    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (todo.id == action.todoId ? {...todo, completed: !todo.completed } : todo));
        default:
            return state;
    }
}

export default todoReducer;
