import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

import simpleLogger from './middlewares/simpleLogger';
// import todoApp from './reducers/allReducers';
// import App from './components/App';
import rootReducer from './rootReducer';
import {fetchBooks} from './book/bookActionCreators';

import BookApp from './book/BookApp';
import TodoApp from './todo/todoApp';
import GithubApp from './github/githubApp';

let store = createStore(rootReducer, {}, compose(
		applyMiddleware(thunk, simpleLogger),
		window.devToolsExtension ? window.devToolsExtension() : f => f
		));


const App = ({children}) => (
		<div>
	        <h1>My App</h1>
	        <ul>
	          <li><Link to="/todo-app">Todo App</Link></li>
	          <li><Link to="/book-app">Book App</Link></li>
	          <li><Link to="/github-app">Github App</Link></li>
	        </ul>

	        {children}
      </div>
	);


// render(
// 	<div>
// 		<Provider store={store}>
// 			<App/>
// 		</Provider>
// 	</div>,
// 	document.getElementById('react')
// 	);


let Routes = (
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path='/' component = {App} >
					<IndexRoute component={BookApp} />
					<Route path='todo-app' component={TodoApp} >
					</Route>
					<Route path='book-app' component={BookApp} />
					<Route path='github-app' component={GithubApp} >

					</Route>
				</Route>
			</Router>
		</Provider>
	);

render(Routes, document.getElementById('react'));
