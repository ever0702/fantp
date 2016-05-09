import React from 'react';

const LabelFieldSet = props => { 
		let {label, className, labelClassName, success, err, children, ...rest} = props;
		return (
			<fieldset {...rest} className={className+ ' form-group'}>
				{
					label&&<label className={labelClassName}>{props.label}</label>
				}
				{children}
				{
					success&&<small className="text-success">{success}</small>
				}
				{
					err&&<small className="text-danger">{err}</small>
				}
			</fieldset>
		);
	};

export default LabelFieldSet;
