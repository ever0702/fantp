import React from 'react';
import {connect} from 'react-redux';
import {Rx} from '../utils/rxUtils';

class DelayInput extends React.Component {

	constructor(props) {
		super(props);

		let {delay = 300} = props;

		this.sub = new Rx.Subject();
		this.sub.debounce(delay)
			.subscribe(value => this.props.onTextChange(value));
	}

	render() {
		let {value, onTextChange, className='form-control', onChange} = this.props;

		return (
				<input {...this.props} className={className} onChange={e=> {onChange(e); this.sub.onNext(e.target.value)} } />
			);
	}
}

// let DelayInput = (props) => {
// 	let {value, onTextChange, onChange, delay = 500, cssClass='form-control'} = props;
// 	var sub = new Rx.Subject();

// 	sub.debounce(500)
// 		.subscribe(value => onTextChange(value));

// 	return (
// 			<input {...props} className={cssClass} onChange={e=> {onChange(e); sub.onNext(e.target.value)} } />
// 		)
// }


export default DelayInput;
