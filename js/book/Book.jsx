import React from 'react';

class Book extends React.Component {
	render() {
		const {name} = this.props;
		return  (

		<div>
			<span>{name} Please Wellhello ss</span>
		</div>
			)
	}
};

// let Book = ({id, name}) => (
// 		<div>
// 			<span>{name}</span>
// 		</div>
// 	)
export default Book;
