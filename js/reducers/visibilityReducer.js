import actionTypes from '../actions/actionConstants';

const visibilityRecuder = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityRecuder;
