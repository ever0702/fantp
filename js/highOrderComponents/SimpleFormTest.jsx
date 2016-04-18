import React from 'react';
import simpleForm from './simpleForm';


let SimpleFormWrapped = ({firstName, lastName, age, onChange}) => {

	return (

			<form>
				<input {...firstName} onChange={e => onChange('firstName')(e.target.value)} type="text"/>
				<input {...lastName} type="text" />
				<input {...age} type="text" />
			</form>
		)
};

let SimpleFormTest = simpleForm({
	formName: 'simpleForm',
	fields: ['firstName', 'lastName', 'age']
})(SimpleFormWrapped);

export default SimpleFormTest;
