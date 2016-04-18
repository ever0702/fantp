import React, {Component} from 'react';

class FormInput extends Component{

	constructor(props) {
		super(props);
		if(!props.validate) {
			props.validate = v => true;
		}
		this.state = {};
		// this.setErr(props.validate, props.value);
	}

	componentDidMount() {
		let {validate, value} = this.props;
	    this.setErr(validate, value);
	}

	setErr= (validate, value) => {
		var result = validate(value);
		if(result.then) {
			result.then(() => this.setState({err: null}), err => this.setState({err}));
		} else {
			this.setState({err: result === true? null: result});
		};
	}

	onValueChange = e => {
		let {onChange, validate} = this.props;
		onChange(e.target.value);
		this.setErr(validate, e.target.value);
	}

	render() {
		let {label, value, onChange, validate} = this.props;
		let {err} = this.state;
		return (
				<fieldset className="form-group" className={err?'has-error': ''}>
					<label>{label}</label>
					<input type="text" className="form-control" placeholder={label} value={value} onChange= {e => this.onValueChange(e)} />
					<span>{err}</span>
				</fieldset>
			);
	}
}

// const FormInput = ({label, value, onChange, validate}) => {

// 	let input;
// 	let err='Init';

// 	const onValueChange = e => {
// 		onChange(e.target.value);

// 		let result = validate(e.target.value);
// 		if(!result.success) {
// 			err = result.message;
// 		}

// 	};

// 	return (
// 			<fieldset className="form-group">
// 				<label>{label}</label>
// 				<input type="text" className="form-control" placeholder={label} value={value} ref={node => input=node} onChange= {e => onValueChange(e)} />
// 				<span>{err}</span>
// 			</fieldset>
// 		);

// }

export default FormInput;
