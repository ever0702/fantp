import React from 'react';
import {connect} from 'react-redux';
import {Rx} from '../utils/rxUtils';
import DelayInput from './DelayInput';

let Autocomplete = ({text, onTextChange, options=[]}) => {

	return (
			<div>
				<DelayInput text={text} onTextChange={onTextChange} />
				<ul>
					{
						options.map(opt => <li>{opt.text}</li>)
					}
				</ul>
			</div>
		)
};


export default Autocomplete;
