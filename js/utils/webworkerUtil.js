import {Rx} from './rxUtils';

const createWorkerFromFunction = fn => {
	var blobURL = URL.createObjectURL(new Blob(['(',

			fn.toString(),

			')()'
		], {
			type: 'application/javascript'
		})),

		let worker = new Worker(blobURL);

	// Won't be needing this anymore
	URL.revokeObjectURL(blobURL);

	return worker;
}

export const createWorkerFromFunction = createWorkerFromFunction;

export default {
	createWorkerFromFunction
};
