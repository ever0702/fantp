import {Router} from 'express';
import planService from './plan.service';
import checkToken from '../middlewares/checkToken';
import {updateObj} from '../../isomorphic/utils/objectUtils';

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
		})
		.put((req, res) => {
			let {userId} = req;
			let {planId} = req.params;
			let {activeNodes, daysCount, peopleCount, averageAge} = req.body;
			console.log(JSON.stringify(req.body));

			planService.findById(planId)
				.then(plan => {
					console.log(JSON.stringify(plan))
					if(!plan) {
						return Promise.reject('Plan Not found');
					}
					plan = plan.toObject();
					plan = plan.overrideProps(req.body);
					console.log('updatedPlan', JSON.stringify(plan));
					return planService.updateOne(planId, plan);
				})
				.then(result => res.send(result))
				.catch(err => {console.log(err); res.status(500).send(err)});

		});

	return router;

}

export default planRouter;
