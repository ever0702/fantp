import actionTypes from './bookActionConstants';

import {get, postJSON } from '../httpUtils/httpHelper';

const {
    CREATE_BOOK,
    DELETE_BOOK,
    STAR_BOOK,
    SET_BOOK_SEARCH_KEY,
    SET_BOOK_STAR_FILTER,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_ERROR,
    CREATE_BOOK_SUCCESS,
    CREATE_BOOK_REQUEST,
    CREATE_BOOK_ERROR
} = actionTypes;

const createBookSuccess = newBook => ({
    type: CREATE_BOOK_SUCCESS,
    newBook
});

const createBookError = err => ({
    type: CREATE_BOOK_ERROR,
    err
});

const createBookRequest = bookName => ({
    type: CREATE_BOOK_REQUEST,
    bookName
});

const createBook = bookName => {
    return dispatch => {
        dispatch(createBookRequest(bookName));
        return postJSON('books', { bookName }).then(
            newBook => {
                dispatch(createBookSuccess(newBook));
                dispatch(fetchBooks());
            },
            error => dispatch(createBookError(error))
        );
    };
};

const fetchBooks = () => dispatch => {
    dispatch({
        type: FETCH_BOOKS_REQUEST
    });

    return get('books').then(
        books => dispatch({
            type: FETCH_BOOKS_SUCCESS,
            books
        }),
        err => dispatch({
            type: FETCH_BOOKS_ERROR,
            err
        })
    );
}



export { createBook, fetchBooks };
