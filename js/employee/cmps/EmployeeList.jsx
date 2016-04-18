import React from 'react';
import {connect} from 'react-redux';

import EmployeeListItem from './EmployeeListItem';

let EmployeeList = ({employees}) => (
		<div>
			<h2>This is the list</h2>
			{employees.map(emp => (
					<EmployeeListItem key={emp.id} {...emp} />
				))}
		</div>
	);


EmployeeList = connect(

		state => ({
			employees: state.employeeApp.employees
		})
	)(EmployeeList);

export default EmployeeList;

