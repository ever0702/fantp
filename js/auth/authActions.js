import { actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';

const actionConfig = {
    sync: [],
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
    actionName: 'SIGN_UP',
    method: 'post',
    url: '/signup'
});

const signin = body => dispatch => asyncActionHelper({
    dispatch,
    payload: body,
    actionName: 'SIGN_IN',
    method: 'post',
    url: '/signin'
});


export { signin, signup, authActions };
