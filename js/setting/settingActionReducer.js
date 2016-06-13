import {actionConstantHelper, asyncActionHelper} from '../utils/actionCreateUtil';

const settingActions = actionConstantHelper({
	sync: [],
	async: ['FETCH_USER_BASIC_INFO']
});

const {FETCH_USER_BASIC_INFO} = settingActions;

const fetchUserBasicInfo = () => dispatch => asyncActionHelper({
	dispatch,
	actionName: FETCH_USER_BASIC_INFO,
	url: '/users/session-user-basic-info'
});


const defaultState = {
	basicInfo: {name: 'hello'}	
};
const settingReducer = (state = defaultState, action) => {
	switch(action.type) {
		case FETCH_USER_BASIC_INFO.SUCCESS:
			return state;
		default:
			return state;
	}
}

export {
	settingActions,
	fetchUserBasicInfo,
	settingReducer
};
