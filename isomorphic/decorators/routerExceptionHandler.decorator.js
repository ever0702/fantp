const routerExceptionHandler = (target, name, descriptor) => {

	let proto = target.prototype;

	const asyncCall = originalFn => async (req, res, next) => {
		try {
			return await originalFn.call(target, req, res, next);
		} catch (err) {
			console.log(JSON.stringify(err))
			res.status(500).send({
				msaage: err || 'Service Error'
				// msaage: err.message || 'Service Error'
			});
		}
	}

	if (descriptor) {
		descriptor.value = asyncCall(descriptor.value);
		return;
	}

	for (let key of Object.getOwnPropertyNames(proto)) {

		if (typeof proto[key] == 'function' && key != 'constructor') {
			let desc = Object.getOwnPropertyDescriptor(proto, key);

			desc.value = asyncCall(desc.value);
			Object.defineProperty(proto, key, desc);
		}
	}
}

export default routerExceptionHandler;
