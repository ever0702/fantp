import {
	Router
}
from 'express';
import stepNodeService from './stepNode.service';
import {
	failWithMessage, successWithData
}
from '../utils/messageGenerator';

const stepNodeRouter = io => {

	let router = Router();
	router.route('/')
		.get((req, res) => {
			stepNodeService.findAll().then(steps => res.send(
				steps.map(sp => ({
					_id: sp._id,
					label: sp.label,
					order: sp.order,	
					subTitle: sp.subTitle,
					parentStep: sp.parent,
					childSteps: steps.filter(s => String(s.parent) == String(sp._id)).map(s => s._id)
				}))
			));
		})
		.post((req, res) => {
			let {
				order, label, subTitle, parent
			} = req.body;

			if (parent != null) {
				stepNodeService.findById(parent).then(parentNode => {
					console.log(parentNode);
				})
			}
			stepNodeService.createOne({
				order, label, subTitle, parent
			})
				.then(stepNode => res.send(stepNode))
				.catch(err => console.log(err));
		});

	return router;
}

export
default stepNodeRouter;
