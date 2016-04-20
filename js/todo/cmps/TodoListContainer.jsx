import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';


import {fetchTodos, toggleTodo} from '../todoActions';
import TodoList from './TodoList';

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
			
				<TodoList todos={ todos} onTodoClick={onTodoClick}/>
			);
	}

}

TodoListContainer = connect(
		state => ({
			todos: state.todoApp.todos
		}),
		dispatch => ({
			fetchTodos: () => dispatch(fetchTodos()),
			onTodoClick: todo => dispatch(toggleTodo(todo.id, !todo.completed))
		})
	)(TodoListContainer);

export default TodoListContainer;

