import React from 'react';
import AddBook from './AddBook';
import BookListContainer from './BookListContainer';


const BookApp = ({children}) => (
		<div>
			<AddBook />
			<BookListContainer />
			{children}
			<h5>After children</h5>
		</div>
	);

export default BookApp;
