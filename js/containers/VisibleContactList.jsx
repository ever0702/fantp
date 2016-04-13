import {connect} from 'react-redux';
import {addContact, removeContact, toggleContactImportant} from '../actions/contactActionCreator';
import ContactList from '../components/ContactList';

const mapStateToProps = (state, ownProps) => {
	let {contacts} = state;
	let {contactSearchKey, contactFilterLink} = state.contactFilter;
	return {contacts: contacts.filter(ct => ct.name.indexOf(contactSearchKey) > -1).filter(ct => {
		if(contactFilterLink == 'ALL') return true;
		if(contactFilterLink == 'IMPORTANT') return ct.important;
		return !ct.important;
	}) };
};


const mapDispatchToProps = dispatch => ({
	onContactAdd: (name, age) => dispatch(addContact(name, age)),
	onContactDelete: id => dispatch(removeContact(id)),
	onClick: id => dispatch(toggleContactImportant(id))
});

const VisibleContactList = connect(
	mapStateToProps,
	mapDispatchToProps,
	)(ContactList);

export default VisibleContactList;
