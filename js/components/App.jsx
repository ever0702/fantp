import React from 'react';
import AddContact from '../containers/AddContact';
import VisibleContactList from '../containers/VisibleContactList';
import ContactSearch from '../containers/ContactSearch';
import ContactFooter from '../components/ContactFooter';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
		<div>
			<div>
				<AddTodo/>
				<VisibleTodoList/>
			</div>
			<div>
				<AddContact />
				<ContactSearch />
				<VisibleContactList />
				<ContactFooter />
			</div>
		</div>
	);

export default App;
