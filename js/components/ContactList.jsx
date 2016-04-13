import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts, onClick, onContactDelete}) => (
	<div>
		<span>The LIst</span>
		{
			contacts.map( ct => <Contact {...ct} onClick={() => onClick(ct.id)} onDelete={() => onContactDelete(ct.id)} key={ct.id}/>)	
		}
	</div>
)

export default ContactList;
