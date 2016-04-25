
const createFormInitialState = (fields =[], fieldsValue = {}) => {
	let form = {
		fields: {},
		stats: {}
	};

	for(let f of fields) {
		form.fields[f] = fieldsValue[f] || 'hello',
		form.stats[f] = {
			touched: false,
			focused: false
		};	
	}

	return form;
}

const formEvtHandler = (state, setState, validate) => fieldName => {
	
	let hasVlidator = typeof validate == 'function';
	return {
		onChange(e) {
			console.log('cccccccccccccc', e);

			state.fields[fieldName] = e.target.value;
			let errors = hasVlidator?validate(state.fields): []
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
		onBlur: e=> {
			state.stats[fieldName].touched = true;
			setState(state);
		}
	};
}

export {createFormInitialState, formEvtHandler};
