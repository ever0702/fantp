import React from 'react';
import {reduxForm} from 'redux-form';

let CreateEmployeeForm = ({fields: {firstName, age}, resetForm}) => (

		<form onSubmit={
			e => console.log('submmmmmmmm')
		}>

			<input {...firstName}/>
			<input {...age}/>
			<button onClick={e=> resetForm()}>RESET</button>

		</form>

	);

CreateEmployeeForm = reduxForm({
	form: 'createEmployee',
	fields: ['firstName', 'age']
})(CreateEmployeeForm);

export default CreateEmployeeForm;

