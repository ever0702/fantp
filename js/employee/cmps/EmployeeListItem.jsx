import React from 'react';
import './emp.scss'

if(module.hot) {
	module.hot.accept();
}
const EmployeeListItem = ({id, firstName, age}) => (

		<div className="emp">
			<span className="emp"> Should be red</span>
				
			Name: {firstName} ---hello Kinda make sense
			{', '}
			Age: {age}
		</div>
	);

export default EmployeeListItem;
