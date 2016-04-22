import {Router} from 'express';
import todoService from './todo.service';

const todoRouter = io => {

	let router = Router();

	router.route('/')
		.get((req, res) => {
			console.log('get TOdo fired');
			todoService.findAll().then(todos => {
				res.send(todos);
			});
		})
		.post((req, res) => {
			console.log('Create todo service')	

			let {text} = req.body;

			todoService.createOne({text, completed: false})
				.then(todo => res.send(todo));
		});

	router.route('/:id')
		.delete((req, res) => {
			console.log('delete todo fired', req.params.id);

			let {id} = req.params;

			todoService.removeById(id)
				.then(todo => res.send(todo));
		})
		.put((req, res) => {
			console.log(req.body);
			let {completed} = req.body;
			let {id} = req.params;

			todoService.updateOne(id, {completed})
				.then(todo => res.send(todo));
		})

	return router;
}


export default todoRouter;

