
import React from 'react';
import {connect} from 'react-redux';
import {addEmployee, employeeFormChange} from '../employeeActionCreators';

let AddEmployeeForm = ({form, onFormChange, onSubmit}) => {

	return (
			<div>
				<form onSubmit={(e) =>{
					e.preventDefault();
					onSubmit(form);
				}}>
					<input value={form.firstName} onChange={(e) => onFormChange({...form, firstName: e.target.value})} placeholder="First Name" />
					<input value={form.age} onChange={(e) => onFormChange({...form, age: e.target.value})} placeholder="age" />
					<button type="submit">Add EMployee</button>
				</form>
			</div>
		);
};


const mapState = state => ({
	form: state.employeeApp.addEmployeeForm
});

const mapDispatch = dispatch => ({
	onFormChange: form => dispatch(employeeFormChange(form)),
	onSubmit: form => dispatch(addEmployee(form))
});

AddEmployeeForm = connect(mapState, mapDispatch)(AddEmployeeForm);


export default AddEmployeeForm;
