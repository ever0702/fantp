import actionTypes from '../actions/actionConstants';


const defaultState = {
	contactSearchKey: '',
	contactFilterLink: 'ALL'
};

const contactFilterReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SET_CONTACT_SEARCH_KEY:
			return {
				...state,
				contactSearchKey: action.contactSearchKey
			};
		case actionTypes.SET_CONTACT_FILTER_LINK: 
			return {
				...state,
				contactFilterLink: action.contactFilterLink
			}
		default:
			return state;
	}
}


export default contactFilterReducer;
