import React from 'react';

const InlineLabelFieldSet = props => { 
		let {label, className, labelClassName, divClassName, success, err, children, ...rest} = props;
		return (
			<fieldset {...rest} className={className+ ' form-group'}>
				{
					label&&<label className={labelClassName+' form-control-label'}>{props.label}</label>
				}

				<div className={divClassName}>
					{children}
					{
						success&&<small className="text-success">{success}</small>
					}
					{
						err&&<small className="text-danger">{err}</small>
					}
				</div>
			</fieldset>
		);
	};

export default InlineLabelFieldSet;
