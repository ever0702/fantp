const routerExceptionHandler = (target, name, descriptor) => {

	let proto = target.prototype;

	if (descriptor) {
		let originalFn = descriptor.value;
		descriptor.value = async(req, res, next) => {
			try {
				let result = await original.call(this, req, res, next);
			} catch (err) {
				res.status(500).send({
					msaage: err.message || 'Service Error'
				});
			}

		}

		return;
	}

	for (let key of Object.getOwnPropertyNames(proto)) {

		if (typeof proto[key] == 'function' && key != 'constructor') {
			let desc = Object.getOwnPropertyDescriptor(proto, key);
			let originalFn = desc.value;

			desc.value = async(req, res, next) => {
				try {
					await originalFn.call(this, req, res, next);
				} catch (err) {
					res.status(500).send({
						message: err.message || 'Service Error'
					});
				}
			}
			Object.defineProperty(proto, key, desc);
		}
	}
}

export
default routerExceptionHandler;
