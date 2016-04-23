import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {fetchTodos, toggleTodo, deleteTodo} from '../todoActions';
import TodoList from './TodoList';
import Track from '../../decorators/trackDecorator';

class TodoListContainer extends Component {

	constructor(props, context)	 {
		super(props, context);
		console.log(this.context);
	}

	componentWillMount() {
		this.props.fetchTodos();
	}

	render() {
		let {todos, onTodoClick} = this.props;
		return (
			
				<TodoList todos={ todos} {...this.props}/>
			);
	}

}

TodoListContainer = connect(
		state => ({
			todos: state.todoApp.todos
		}),
		dispatch => ({
			fetchTodos: () => dispatch(fetchTodos()),
			toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
			deleteTodo: id => dispatch(deleteTodo(id))
		})
	)(TodoListContainer);

export default TodoListContainer;

