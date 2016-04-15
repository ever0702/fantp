const simpleLogger = store => dispatch => action  => {
	console.group(action.type);
	console.info('dispatching', action);
	var result = dispatch(action);
	console.log(store.getState());
	console.groupEnd(action.type);
	return result;
}

export default simpleLogger;
