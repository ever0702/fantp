import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, onTodoClick}) => (

		<ul>
			{
				todos.map(td => (
					<div onClick={e=> onTodoClick(td)}>
						<TodoItem  {...td} key={td.id} />
					</div>
					)
				)
			}
		</ul>
	);


export default TodoList;
