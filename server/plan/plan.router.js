import {Router} from 'express';
import planService from './plan.service';
import checkToken from '../middlewares/checkToken';

const planRouter = io => {

	let router = Router();

	router.use(checkToken);

	router.route('/')
		.get((req, res) => {
			let {userId} = req;
			planService.find({user: userId})
				.then(plans => res.send(plans))
				.catch(err => console.log(err));
		})
		.post((req, res) => {
			let {userId} = req;
			let {peopleCount, daysCount, averageAge, activeNodes} = req.body;
			planService.createOne({peopleCount, daysCount, averageAge, activeNodes, user: userId})
				.then(plan => res.send(plan))
				.catch(err => console.log(err));
		});

	router.route('/:planId')
		.get((req, res) => {
			let {userId} = req;
			let {planId} = req.params;
			planService.findById(planId)
				.then(plan => res.send(plan))
				.catch(err => console.log(err));
		});

	return router;

}

export default planRouter;
