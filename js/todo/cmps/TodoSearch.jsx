import React from 'react';
import {connect} from 'react-redux';
import {Rx} from '../../utils/rxUtils';
import {setSearchText, searchTodos} from '../todoActions';
import Autocomplete from '../../commonComponents/Autocomplete';

let TodoSearch = props => <Autocomplete {...props} options={props.todoAutocompleteOptions}/>;

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

