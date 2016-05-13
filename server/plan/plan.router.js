import {Router} from 'express';

const planRouter = io => {

	let router = Router();

	router.route('/')
		.get((req, res) => {

		})
		.post((req, res) => {
			let {userId} = req;


		})

}

export default planRouter;
