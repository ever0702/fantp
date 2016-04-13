import actionTypes from './bookActionConstants';

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

const defaultBookAppState = {
    isCreating: false,
    isFetching: false,
    books: []
};
const bookAppReducers = (state = defaultBookAppState, action) => {
    switch (action.type) {
        case CREATE_BOOK_REQUEST:
            return {
                ...state,
                isCreating: true
            };
        case CREATE_BOOK_SUCCESS:
            return {
                ...state,
                isCreating: false,
                books: [...state.books, action.newBook]
            };
        case CREATE_BOOK_ERROR:
            return {
                ...state,
                isCreating: false,
            };
        case FETCH_BOOKS_REQUEST: 
        	return {
        		...state,
        		isFetching: true
        	};
        case FETCH_BOOKS_SUCCESS: 
        	return {
        		...state,
        		books: action.books
        	};
        default:
            return state;
    };
};

export default bookAppReducers;
