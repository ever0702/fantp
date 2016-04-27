const createFormInitialState = (fields = [], initData = {}) => {
    let form = {
        fields: {},
        stats: {}
    };


    return Promise.resolve(typeof initData == 'function'? initData(): initData).then(values => {
        for (let f of fields) {
            form.fields[f] = values[f] || '',
                form.stats[f] = {
                    touched: false,
                    focused: false
                };
            form.errors = {};
        }

        return form;
    });
}

const createEmptyInitialState = fields => {

    let form = {
        fields: {},
        stats: {}
    };


    for (let f of fields) {
        form.stats[f] = {
            touched: false,
            focused: false
        };
        form.errors = {};
    }

    return form;
}

const formEvtHandler = (setState, validate) => (fieldName, state) => {

    let hasVlidator = typeof validate == 'function';
    return {
        onChange(e, value) {
            let v = e ? e.target.value : value;
            console.log('cccccccccccccc', e);

            state.fields[fieldName] = v;
            let errors = hasVlidator ? validate(state.fields) : []
            state.errors = errors;
            console.log('found errors ', errors)
            setState(state);
            console.log(state);
        },
        onFocus: e => {
            console.log('focus', e.target.value)

            state.stats[fieldName].focused = true;
            setState(state);
        },
        onBlur: e => {
            state.stats[fieldName].touched = true;
            setState(state);
        }
    };
}

export {createEmptyInitialState, createFormInitialState, formEvtHandler };
