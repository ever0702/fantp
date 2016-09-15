let range = function * (...args) {
	let len = args.length;
	let [start, stop, step] = [len > 1 ? args[0] : 0, len == 1 ? args[0] : args[1], len > 2 ? args[2] : 1];
	for (let i = start; i < stop; i += step) {
		yield i;
	}
}

let randrange = (...args) => {
	let len = args.length;
	let [start, stop, step] = [len > 1 ? args[0] : 0, len == 1 ? args[0] : args[1], len > 2 ? args[2] : 1];
	let count = Math.ceil((stop - start) / step);
	if (count <= 0) return start;
	let cur = Math.floor(count * Math.random());
	return start + cur * step;
}


let take = function * (n, gen) {
	let counter = 0
	for (let v of gen) {
		if (counter < n) {
			yield v;
			count ++;
			continue;
		}
		break;
	}
}

export {
	range, randrange, take
};
