import React from 'react';

const LabelFieldSet = props => (
			<fieldset {...props} className={props.className+ ' form-group'}>
				{
					props.label&&<label>{props.label}</label>
				}
				{props.children}
				{
					props.success&&<small className="text-success">{props.success}</small>
				}
				{
					props.err&&<small className="text-danger">{props.err}</small>
				}
			</fieldset>
		);

export default LabelFieldSet;
