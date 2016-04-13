import { combineReducers } from 'redux';
import bookAppReducer from './book/bookAppReducer';

const rootReducer = combineReducers({
    bookApp: bookAppReducer
});

export default rootReducer;
