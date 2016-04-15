import githubActions from './githubActionConstants';
import {get} from '../httpUtils/httpHelper';

const {
	SEARCH_GITHUB_USER_REQUEST,
	SEARCH_GITHUB_USER_SUCCESS,
	SEARCH_GITHUB_USER_ERROR
} = githubActions;


// const GITHUB_USER_PREFIX = 'https://api.github.com/users/';
const GITHUB_USER_PREFIX = 'http://jsonplaceholder.typicode.com/users/';

const searchGithubUser = userId => {
	return dispatch => {
		dispatch({
			type: SEARCH_GITHUB_USER_REQUEST
		});

		get(`${GITHUB_USER_PREFIX}${userId}`).then( 
			user => dispatch({
				type: SEARCH_GITHUB_USER_SUCCESS,
				user
			}), 
			err => dispatch({
				type: SEARCH_GITHUB_USER_ERROR,
				err
			})
		);

	}
}

export {searchGithubUser};
