import {Router} from 'express';
import planService from './plan.service';
import checkToken from '../middlewares/checkToken';

const planRouter = io => {

	let router = Router();

	router.use(checkToken);

	router.route('/')
		.get((req, res) => {
			
		})
		.post((req, res) => {
			let {userId} = req;
			console.log(JSON.stringify(req.user))
			console.log('userId is ', userId);
			let {peopleCount, daysCount, averageAge, paths} = req.body;
			planService.createOne({peopleCount, daysCount, averageAge, paths, user: userId})
				.then(plan => res.send(plan))
				.catch(err => console.log(err));
		});

	return router;

}

export default planRouter;
