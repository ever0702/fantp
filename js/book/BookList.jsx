import React from 'react';
import Book from './Book';
import {Link} from 'react-router';
console.log(Link);

let BookList = ({books}) => (
		<div>
			{
				books.map(bk => <Link to='todo-app' key={bk.id}><Book {...bk}  /></Link>)
			}
		</div>
	)

export default BookList;
