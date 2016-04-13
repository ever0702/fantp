import actionTypes from '../actions/actionConstants';

let contactId = 0;

const addContact = (state, name, age) => {
    return [
        ...state, {
            id: contactId++,
            name,
            age
        }
    ];
}

const removeContact = (state, id) => {
    console.log('removeing contact', id)
    return state.filter(con => con.id !== id);
}

const toggleContactImportant = (state, id) => {
    return state.map(ct => {
        if (ct.id == id) {
            return {
                ...ct,
                important: !!!ct.important
            };
        } else return ct;
    });
};

const contactReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_CONTACT:
            return addContact(state, action.name, action.age);
        case actionTypes.REMOVE_CONTACT:
            return removeContact(state, action.id);
        case actionTypes.TOGGLE_CONTACT_IMPORTANT:
            return toggleContactImportant(state, action.id);
        default:
            return state;
    }
}

export
default contactReducer;
