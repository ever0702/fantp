import employeeActions from './employeeActions';
import { addEmployee, employeeFormChange } from './employeeActionCreators';

const { ADD_EMPLOYEE, EMPLOYEE_FORM_CHANGE, ADD_EMPLOYEE_FORM_ERROR, REMOVE_ADD_EMPLOYEE_FORM_ERROR } = employeeActions;

let nextEmpId = 0;

const defaultState = {
    addEmployeeForm: {
        firstName: 'yo',
        age: 145
    },
    addEmployeeFormErrors: [],
    employees: []
};

const reducer = (state = defaultState, action) => {
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
            };
        case ADD_EMPLOYEE_FORM_ERROR:
            return {
                ...state,
                addEmployeeFormErrors: addError(state.addEmployeeFormErrors, action.fieldName)
            };
        case REMOVE_ADD_EMPLOYEE_FORM_ERROR:
            return {
                ...state,
                addEmployeeFormErrors: state.addEmployeeFormErrors.filter(err => err !== action.fieldName)
            };
        default:
            return state;
    }
};

function addError(errors, fieldName) {
    if (errors.indexOf(fieldName) < 0) {
        return [...errors, fieldName];
    } else {
        return [...errors];
    }
}




export default reducer;
