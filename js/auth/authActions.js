import {actionConstantHelper, asyncActionHelper} from '../utils/actionCreateUtil';

const actionConfig = {
	sync:[],
	async: ['SIGN_UP', 'SIGN_IN']
};


const authActions = actionConstantHelper(actionConfig);

const {
	SIGN_UP,
	SIGN_IN
} = authActions;

const signup = body => dispatch => asyncActionHelper({
	dispatch,
	payload: body,
	successParamName: 'user',
	actionName: 'SIGN_UP',
	method: 'post',
	url: '/signup'
});


export {signup, authActions};
