import React from 'react';
import ContactFilterLink from './ContactFilterLink';

const ContactFooter = () => {
	return (
			<div>
				<ContactFilterLink filter="ALL" >ALL</ContactFilterLink>
				<ContactFilterLink filter="IMPORTANT" > Important </ContactFilterLink>
				<ContactFilterLink filter="NORMAL" >Normal </ContactFilterLink>
			</div>
		)
};

export default ContactFooter;
