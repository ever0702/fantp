import React from 'react';
import {Component} from 'react';
import AddEmployeeForm from './cmps/AddEmployeeForm';
import EmployeeList from './cmps/EmployeeList';



const EmployeeApp = () => (
		<div>
			<AddEmployeeForm />
			<EmployeeList />
			<p>we reload</p>
		</div>
	);

export default EmployeeApp;



