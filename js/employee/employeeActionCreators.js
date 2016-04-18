import employeeActions from './employeeActions';

const {
	ADD_EMPLOYEE,
	EMPLOYEE_FORM_CHANGE,
	ADD_EMPLOYEE_FORM_ERROR,
	REMOVE_ADD_EMPLOYEE_FORM_ERROR
} = employeeActions;


const addEmployee = form => ({
	type: ADD_EMPLOYEE,
	form
});

const addEmployeeFormError = fieldName => ({
	type: ADD_EMPLOYEE_FORM_ERROR,
	fieldName
});

const removeAddEmployeeFormError = fieldName => ({
	type: REMOVE_ADD_EMPLOYEE_FORM_ERROR,
	fieldName
});

const employeeFormChange = form => ({
	type: EMPLOYEE_FORM_CHANGE,
	form
});

export {addEmployee, employeeFormChange, addEmployeeFormError, removeAddEmployeeFormError};

