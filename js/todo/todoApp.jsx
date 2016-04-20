import React from 'react';
import {todoActions} from './todoActions';
import CreateTodoForm from './cmps/CreateTodoForm';
import TodoListContainer from './cmps/TodoListContainer';

console.log(todoActions);

const TodoApp = () => (
		<div>
			<h4>Welcome to TOdo App</h4>
			<CreateTodoForm />
			<TodoListContainer />
		</div>
		
	);

export default TodoApp;
