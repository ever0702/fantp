import employeeActions from './employeeActions';
import { addEmployee, employeeFormChange } from './employeeActionCreators';

const { ADD_EMPLOYEE, EMPLOYEE_FORM_CHANGE } = employeeActions;

let nextEmpId = 0;

console.log('hey')
const defaultState = {
    addEmployeeForm: {
        firstName: 'yo',
        age: 145
    },

    employees: []
};

const reducer = (state = defaultState, action) => {
	console.log('hhgg')
    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [
                    ...state.employees, {
                        id: nextEmpId++,
                        ...action.form
                    }
                ],
                addEmployeeForm: defaultState.addEmployeeForm
            };
        case EMPLOYEE_FORM_CHANGE:
            return {
                ...state,
                addEmployeeForm: {...action.form }
            }
        default:
            return state;
    }
};


export default reducer;
