import React from 'react';
import {todoActions} from './todoActions';
import TodoSearch from './cmps/TodoSearch';
import CreateTodoForm from './cmps/CreateTodoForm';
import TodoListContainer from './cmps/TodoListContainer';


console.log(todoActions);

const TodoApp = () => (
		<div>
			<h4>Welcome to TOdo App</h4>
			<TodoSearch />
			<CreateTodoForm />
			<TodoListContainer />
		</div>
		
	);

export default TodoApp;
