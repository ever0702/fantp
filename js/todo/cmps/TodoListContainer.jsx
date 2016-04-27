import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {fetchTodos, toggleTodo, deleteTodo} from '../todoActions';
import TodoList from './TodoList';
import Track from '../../decorators/trackDecorator';
@connect(
		state => ({
			todos: state.todoApp.todos.filter(td => {
				switch(state.todoApp.visibilityFilter) {
					case 'COMPLETED':
						return td.completed;
					case 'ACTIVE':
						return !td.completed;
					default: 
						return  true;
				}
			})
		}),
		dispatch => ({
			fetchTodos: () => dispatch(fetchTodos()),
			toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
			deleteTodo: id => dispatch(deleteTodo(id))
		})
	)
export default class TodoListContainer extends Component {

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

