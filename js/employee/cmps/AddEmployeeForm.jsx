
import React from 'react';
import {connect} from 'react-redux';
import {addEmployee, employeeFormChange, addEmployeeFormError, removeAddEmployeeFormError} from '../employeeActionCreators';
import FormInput from '../../commonComponents/FormInput';
import './emp.scss';

let AddEmployeeForm = ({form, onFormChange, onSubmit, validateFirstname, errors}) => {

	return (
			<div className="addEmployeeForm">
				<form onSubmit={(e) =>{
					e.preventDefault();
					onSubmit(form);
				}} onChange={e=> console.log('form on change ', e)}>
					<FormInput label="FristName" value={form.firstName} onChange={firstName => onFormChange({...form, firstName})} validate={value => validateFirstname(value)}/>
					<FormInput label="Age" value={form.age} onChange={age => onFormChange({...form, age})} validate={age => !isNaN(age)&&parseInt(age)>18?true: 'At least 18 years old'}/>


					<input value={form.firstName} onChange={(e) => onFormChange({...form, firstName: e.target.value})} placeholder="First Name" />
					<input value={form.age} onChange={(e) => onFormChange({...form, age: e.target.value})} placeholder="age" />
					<button type="submit">Add EMployee</button>
					<div>hasErrors: {errors.length}</div>
				</form>
			</div>
		);
};


const mapState = state => ({
	form: state.employeeApp.addEmployeeForm,
	errors: state.employeeApp.addEmployeeFormErrors 
});


const mapDispatch = dispatch => ({
	onFormChange: form => dispatch(employeeFormChange(form)),
	onSubmit: form => dispatch(addEmployee(form)),

	validateFirstname: firstName => {
		if(firstName.length > 3) {
			dispatch(removeAddEmployeeFormError('firstName'));
			return Promise.resolve(true);
		} else {
			dispatch(addEmployeeFormError('firstName'));
			return Promise.reject(`clearly it's too errors.length`);
		}
	}
});

AddEmployeeForm = connect(mapState, mapDispatch)(AddEmployeeForm);


export default AddEmployeeForm;
