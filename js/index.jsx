import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
// import todoApp from './reducers/allReducers';
// import App from './components/App';
import rootReducer from './rootReducer';
import App from './bootstrap';

import {fetchBooks} from './book/bookActionCreators';

import BookApp from './book/BookApp';

let store = createStore(rootReducer, {}, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
		));

// store.dispatch(fetchBooks())
// let store = createStore(rootReducer, applyMiddleware(thunk) ,window.devToolsExtension ? window.devToolsExtension() : undefined);

render(
	<div>
		<Provider store={store}>
			<App/>
		</Provider>
	</div>,
	document.getElementById('react')
	);
