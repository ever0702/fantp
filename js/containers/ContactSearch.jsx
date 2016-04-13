import React from 'react';
import {changeContactSearchKey} from '../actions/contactActionCreator';
import {connect} from 'react-redux';

// const mapDispatchToProps = dispatch => ({
// 	onSearchKeyChange: key => dispatch(changeContactSearchKey(key))
// });

let ContactSearch =({dispatch}) => {
	let searchInput;
	return (
		<div>
			<input ref={node => searchInput = node} onChange={e => dispatch(changeContactSearchKey(searchInput.value))} />
		</div>
	);
};

ContactSearch = connect()(ContactSearch);

export default ContactSearch;

