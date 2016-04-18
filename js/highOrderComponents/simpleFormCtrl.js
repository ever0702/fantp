const simpleFormActions = {
    CHANGE: 'CHANGE'
};

const changeFormValue = (formName, fieldName, value) => ({
    type: simpleFormActions.CHANGE,
    formName,
    fieldName,
    value
});


const simpleFormReducer = (state = {}, action) => {
    switch (action.type) {
        case simpleFormActions.CHANGE:
            {
                let { formName, fieldName, value } = action;

                return {
                    ...state,
                    [formName]: {...state[formName], [fieldName]: { value } }
                };
            };
        default:
            return state;
    }
}

export { simpleFormReducer, simpleFormActions, changeFormValue };
