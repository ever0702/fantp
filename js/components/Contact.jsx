import React from 'react';

const Contact = ({id, name, age, onDelete, onClick}) => (

	<li>
		<span onClick={e=>onClick(id)}>{name}</span>
		{' '}
		<span>{age}</span>
		{' '}
		<span onClick={e=> {
			onDelete(id);
		}}>
			Delete
		</span>
	</li>
);

export default Contact;
