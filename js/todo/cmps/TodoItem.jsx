import React from 'react';

const TodoItem = ({id, text, completed, onTodoClick}) => (

		<li> {text + completed} </li>
	);

export default TodoItem;
