import {authActions, signup} from './authActions';

const {SIGN_UP, SIGN_IN} = authActions;


const defaultState = {
	username: null
};

const authReducer = (state=defaultState, action) => {
	switch(action.type) {
		case SIGN_UP.SUCCESS: 
			return {
				...state,
				username: action.user.username
			};
		default:
			return state;
	}
}

export default authReducer;
