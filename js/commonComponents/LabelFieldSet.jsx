import React from 'react';

const LabelFieldSet = props => (
			<fieldset className="form-group">
				{
					props.label&&<label>{props.label}</label>
				}
				{props.children}
				{
					props.err&&<small className="text-muted">{props.err}</small>
				}
			</fieldset>
		);

export default LabelFieldSet;
