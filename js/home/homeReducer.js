import {homeActions, setStartForm} from './homeActions';

let {SET_START_FORM} = homeActions;

let defaultState = {
	peopleCount: null,
	daysCount: null,
	averageAge: null
};


const homeReducer = (state= defaultState, action) => {
	switch(action.type) {
		case SET_START_FORM:
		return {
			...state,
			...action
		}

		default:
			return state;
	}
}

export default homeReducer;
