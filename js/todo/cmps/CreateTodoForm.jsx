import React from 'react';
import {connect} from 'react-redux';
import {fetchTodos, createNewTodo} from '../todoActions';

let CreatTodoForm = ({dispatch}) => {
	let todoInput;
	return (

			<form onSubmit={
				e => {
					e.preventDefault();
					dispatch(createNewTodo(todoInput.value));
					todoInput.value = '';
				}
			}>
				<fieldset className="form-group">
					<input ref={node => todoInput=node} type="text" className="form-control"/>
				</fieldset>

				<button type="submit" className="btn btn-primary">Add Todo</button>
			</form>
		)
};

export default connect()(CreatTodoForm);
