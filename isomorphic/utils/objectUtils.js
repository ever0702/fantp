const updateObj = (source, target) => {
	if (typeof source != 'object') return source;
	for (let k in source) {
		if (target[k]) {
			source[k] = target[k];
		}
	}

	return source;
}

export {
	updateObj
};
