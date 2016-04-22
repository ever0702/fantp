import React from 'react';
import {connect} from 'react-redux';
import {Rx} from '../../utils/rxUtils';
import {setSearchText, searchTodos} from '../todoActions';
import Autocomplete from '../../commonComponents/Autocomplete';

let TodoSearch = ({todoSearchText, onTextChange, todoAutocompleteOptions}) => {
	var sub = new Rx.Subject();
	sub.subscribe(text => onTextChange(text));
	return (
			<Autocomplete options={todoAutocompleteOptions} text={todoSearchText} onTextChange={text=>sub.onNext(text)} />
		)
}

TodoSearch = connect(
		state => ({
			todoSearchText: state.todoApp.todoSearchText,
			todoAutocompleteOptions: state.todoApp.todoAutocompleteOptions
		}),
		dispatch => ({
			onTextChange: text => dispatch(searchTodos(text))
		})
	)(TodoSearch);

export default TodoSearch

