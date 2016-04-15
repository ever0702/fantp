import githubActions from './githubActionConstants';

const {
	SEARCH_GITHUB_USER_REQUEST,
	SEARCH_GITHUB_USER_SUCCESS,
	SEARCH_GITHUB_USER_ERROR
} = githubActions;

const defaultState = {
	isFetchingUser: false,
	user: null
};


const githubReducer = (state = defaultState, action) => {

	switch(action.type) {
		case SEARCH_GITHUB_USER_REQUEST : 
			return {
				...state,
				isFetchingUser: true
			};
		case SEARCH_GITHUB_USER_SUCCESS: 
			return {
				...state,
				isFetchingUser: false,
				user: action.user
			};
		case SEARCH_GITHUB_USER_ERROR: 
			return {
				...state,
				isFetchingUser: false,
				user: null
			}
		default:
			return state;

	};

};

export default githubReducer;
