import React from 'react';
import {connect} from 'react-redux';
import {Rx} from '../utils/rxUtils';

let DelayInput = ({text, onTextChange, delay = 300, cssClass='form-control'}) => {
	var sub = new Rx.Subject();

	sub.debounce(delay)
		.subscribe(text => onTextChange(text));

	return (
			<input className={cssClass} defaultValue={text} onChange={e=> sub.onNext(e.target.value)} />
		)
}


export default DelayInput;
