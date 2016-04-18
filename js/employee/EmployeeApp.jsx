import React from 'react';
import {Component} from 'react';
import AddEmployeeForm from './cmps/AddEmployeeForm';
import EmployeeList from './cmps/EmployeeList';
import SimpleForm from './cmps/TestReduxForm';
import CreateEmployeeForm from './cmps/CreateEmployeeForm';



const EmployeeApp = () => (
		<div>
			<AddEmployeeForm />
			<CreateEmployeeForm />
			<EmployeeList />

			<p>we reloaddd</p>
			<SimpleForm />
		</div>
	);

export default EmployeeApp;



