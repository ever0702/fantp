import React from 'react';

const TodoItem = ({_id, text, completed, toggleTodo, deleteTodo}) => (

		<li>
			<div>{_id+ '    '}</div>
			<span>{text +' '}</span> 
			<span>{completed +' '}</span> 
			<button className="btn btn-xs" onClick={e=>toggleTodo(_id, !completed)}>Toggle</button>
			<button className="btn btn-xs btn-danger" onClick={e=>deleteTodo(_id)}>X</button>
		 </li>
	);

export default TodoItem;
