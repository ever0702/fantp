import {connect} from 'react-redux';
import Link from './Link';
import {setContactFilterLink} from '../actions/contactActionCreator';

let mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter == state.contactActiveFilter
});

let mapDispatchToProps = (dispatch, ownProps) => ({
	onClick() {
		dispatch(setContactFilterLink(ownProps.filter));
	}
});

let ContactFilterLink = connect(
		mapStateToProps,
		mapDispatchToProps
	)(Link);

export default ContactFilterLink;
