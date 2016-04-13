import React from 'react';
import {createContact} from '../actions/contactActionCreator';
import {connect} from 'react-redux';

const AddContact = ({dispatch}) => {
	let nameInput, ageInput;

	return (

		<div>
			<form onSubmit={e => {
				e.preventDefault();
				dispatch(createContact(nameInput.value, ageInput.value));
				nameInput.value='';
				ageInput.value='';
			}}>
				<input ref= {node => nameInput = node} />
				<input ref= {node => ageInput = node} />
				<button type="submit">Add Contact</button>
			</form>
		</div>
	)

}

export default connect()(AddContact);
