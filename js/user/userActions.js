import { actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';

const actionConfig = {
	sync: [],
	async: ['CHECK_USER_UNIQUE', 'SIGN_UP', 'SIGN_IN']
}

const userActions = actionConstantHelper(actionConfig);

const {
	CHECK_USER_UNIQUE,
	SIGN_UP,
	SIGN_IN
} = userActions;

