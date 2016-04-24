import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, toggleTodo, deleteTodo}) => (
	<ul>
		{
			todos.map(td => (
					<TodoItem  key={td._id} {...td}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
				)
			)
		}

		<input className="test" />
	</ul>
);


const { arrayOf, func, string, bool, shape} = PropTypes;

TodoList.propTypes = {
	todos: arrayOf(shape({
		_id: string.isRequired,
		completed: bool.isRequired
	})).isRequired,
	toggleTodo: func.isRequired,
	deleteTodo: func.isRequired

}

export default TodoList;
