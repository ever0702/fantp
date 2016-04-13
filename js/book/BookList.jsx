import React from 'react';
import Book from './Book';

let BookList = ({books}) => (
		<div>
			{
				books.map(bk => <Book {...bk} key={bk.id} />)
			}
		</div>
	)

export default BookList;
