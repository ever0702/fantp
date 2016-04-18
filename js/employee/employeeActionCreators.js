import employeeActions from './employeeActions';

const {
	ADD_EMPLOYEE,
	EMPLOYEE_FORM_CHANGE
} = employeeActions;


const addEmployee = form => ({
	type: ADD_EMPLOYEE,
	form
});

const employeeFormChange = form => ({
	type: EMPLOYEE_FORM_CHANGE,
	form
});

export {addEmployee, employeeFormChange};

