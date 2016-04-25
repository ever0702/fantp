import React from 'react';

const LabelFieldSet = props => (
			<fieldset {...props} className={props.className+ ' form-group'}>
				{
					props.label&&<label>{props.label}</label>
				}
				{props.children}
				{
					props.err&&<small className="text-danger">{props.err}</small>
				}
			</fieldset>
		);

export default LabelFieldSet;
