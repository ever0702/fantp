import React from 'react';
import Book from './Book';
import {Link} from 'react-router';

let BookList = ({books}) => (
		<div>
			{
				books.map(bk => <Link to='todo-app' key={bk.id}><Book {...bk}  /></Link>)
			}
		</div>
	)

export default BookList;
