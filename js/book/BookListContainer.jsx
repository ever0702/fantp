
import {connect} from 'react-redux';
import BookList from './BookList';
import {fetchBooks} from './bookActionCreators';

const mapStateToProps = state => ({
	books: state.bookApp.books
});

const mapDispatch = dispatch => {
	dispatch(fetchBooks());
	return {dispatch};
}


let BookListContainer = connect(mapStateToProps, mapDispatch)(BookList);

export default BookListContainer;
