import React, {PropTypes} from 'react';
import FilterLink from '../containers/FilterLink';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
	<div>
		<ul>
			{
				todos.map(todo => 
					<Todo 
						key={todo.id}
						{...todo} 
						onClick={() => onTodoClick(todo.id)}
					/>
				)
			}	
		</ul>
		<p>
			Show: {' '}
			<FilterLink filter='SHOW_ALL'>All</FilterLink>
			<FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
			<FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
		</p>
	</div>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodoList;

