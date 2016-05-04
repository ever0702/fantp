import { actionConstantHelper, asyncActionHelper } from '../utils/actionCreateUtil';

const actionConfig = {
    sync: [],
    async: ['SIGN_UP', 'SIGN_IN', 'SIGN_OUT']
};


const authActions = actionConstantHelper(actionConfig);

const {
    SIGN_UP,
    SIGN_IN,
    SIGN_OUT
} = authActions;

const signupSuccess = data => ({
    type: SIGN_UP.SUCCESS,
    ...data
});

const signupError = () => ({
    type: SIGN_UP.ERROR
});

const signinError = () => ({
    type: SIGN_IN.ERROR
});

const signinSuccess = data => ({
    type: SIGN_IN.SUCCESS,
    ...data
});

const signoutSuccess = () => ({
    type: SIGN_OUT.SUCCESS
});

export { signinSuccess, signinError, signupSuccess, signupError, signoutSuccess, authActions };
