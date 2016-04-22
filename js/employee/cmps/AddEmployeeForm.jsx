
import React from 'react';
import {connect} from 'react-redux';
import {addEmployee, employeeFormChange, addEmployeeFormError, removeAddEmployeeFormError} from '../employeeActionCreators';

import {Hello} from '../../decorators/HelloDecorator';
import './emp.scss';

@Hello('I am testing decor')
class TestDecor {
	constructor() {
		console.log('cons');
	}

}

var mytest = new TestDecor();
var mytest2 = new TestDecor();


let AddEmployeeForm = ({form, onFormChange, onSubmit, validateFirstname, errors}) => {

	return (
			<div className="addEmployeeForm">
				<form onSubmit={(e) =>{
					e.preventDefault();
					onSubmit(form);
				}} onChange={e=> console.log('form on change ', e)}>

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
