import BaseService from '../utils/base.service';

import Todo from './todo.model';

class TodoService extends BaseService {
	constructor() {
		super(Todo);
	}

}

const todoSerice = new TodoService();

export default todoSerice;
