import { authActions, signup } from './authActions';

const { SIGN_UP, SIGN_IN } = authActions;


const defaultState = {
    _id: null,
    username: null,
    token: null
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGN_UP.SUCCESS:
            return {
                ...state,
                ...action.data
            };
        case SIGN_UP.ERROR:
            return {
                ...state,
                user: null,
                token: null
            };
        case SIGN_IN.SUCCESS:
            return {
                ...state,
                ...action.data
            };
        case SIGN_IN.ERROR:
            return {
                ...state,
                user: null,
                token: null
            };
        default:
            return state;
    }
}

export default authReducer;
