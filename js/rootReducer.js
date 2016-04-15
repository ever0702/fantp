import { combineReducers } from 'redux';
import bookAppReducer from './book/bookAppReducer';
import githubReducer from './github/githubReducer';

const rootReducer = combineReducers({
    bookApp: bookAppReducer,
    githubApp: githubReducer
});

export default rootReducer;
