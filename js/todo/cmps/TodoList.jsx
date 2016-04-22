import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, toggleTodo, deleteTodo}) => (

		<ul>
			{
				todos.map(td => (
						<TodoItem  key={td._id} {...td}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
					)
				)
			}
		</ul>
	);


export default TodoList;
