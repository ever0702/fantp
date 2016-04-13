import actionTypes from './actionConstants';
const createContact = (name, age) => ({
    type: actionTypes.ADD_CONTACT,
    name,
    age
});

const removeContact = id => {
    console.log('remove contact', id);
    return {
        type: actionTypes.REMOVE_CONTACT,
        id
    }
};

const changeContactSearchKey = key => ({
    type: actionTypes.SET_CONTACT_SEARCH_KEY,
    contactSearchKey: key
});

const setContactFilterLink = contactFilterLink => ({
    type: actionTypes.SET_CONTACT_FILTER_LINK,
    contactFilterLink
});

const toggleContactImportant = id => ({
	type: actionTypes.TOGGLE_CONTACT_IMPORTANT,
	id
});

export { createContact, removeContact, changeContactSearchKey, setContactFilterLink , toggleContactImportant};
