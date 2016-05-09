
import {actionConstantHelper} from '../utils/actionCreateUtil';

const actionConfig = {
	sync: ['SET_START_FORM']
};

const homeActions = actionConstantHelper(actionConfig);

const {SET_START_FORM} = homeActions;

const setStartForm = form => ({
	type: SET_START_FORM,
	...form
});

export {homeActions, setStartForm};
