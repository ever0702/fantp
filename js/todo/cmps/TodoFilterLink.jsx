import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../todoActions';
// import CommonLink from '../../commonComponents/CommonLink';

const CommonLink = ({active, onClick, children}) => {
	if(active) return <span>{children}</span>;

	return <button href="#" onClick={e => {e.preventDefault(); onClick()}}>{children}</button>;
}


const TodoFilterLink = connect(
		(state, ownProps) => ({
			active: state.todoApp.visibilityFilter == ownProps.value
		}),
		(dispatch, ownProps) => ({
			onClick: () => dispatch(setVisibilityFilter(ownProps.value))
		})
	)(CommonLink);

CommonLink.propTypes = {
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func
}

TodoFilterLink.propTypes = {
	value: PropTypes.string.isRequired
};

export default TodoFilterLink;
