import React from 'react';
import {connect} from 'react-redux';
import {Rx} from '../utils/rxUtils';

let DelayInput = (props) => {
	let {text, onTextChange, delay = 300, cssClass='form-control'} = props;
	var sub = new Rx.Subject();

	sub.debounce(delay)
		.subscribe(text => onTextChange(text));

	return (
			<input {...props} className={cssClass} defaultValue={text} onChange={e=> sub.onNext(e.target.value)} />
		)
}


export default DelayInput;
