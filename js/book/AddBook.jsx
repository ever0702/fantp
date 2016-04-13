import React from 'react';
import {createBook} from './bookActionCreators';
import {connect} from 'react-redux';

let AddBook = ({dispatch}) => {
		let input;
		return (
			<div>
				<form onSubmit={e=> {
					e.preventDefault();
					dispatch(createBook(input.value));
					input.value='';
				}}>
					<input ref={node => input=node} />
					<button type="Submit">AddBook</button>
				</form>
			</div>
			);

	};

AddBook = connect()(AddBook);

export default AddBook;
