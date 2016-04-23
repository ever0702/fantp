
const Track = function (target, name, descriptor) {

	let original = descriptor.value;
	let startTime = new Date();

	descriptor.value = () => {
		console.log(`@Track  ${name} started `);

		original.apply(this, arguments);

		let ellapsed = (new Date() - startTime) + ' ms';
		console.log(`@Track End  ${name} Elapsed time ${ellapsed} `);
	}

	Object.defineProperty(target, name, descriptor);

}

export default Track;