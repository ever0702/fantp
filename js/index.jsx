import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import configStore from './reduxStore';

import simpleLogger from './middlewares/simpleLogger';
// import todoApp from './reducers/allReducers';
// import App from './components/App';
import rootReducer from './rootReducer';
import {fetchBooks} from './book/bookActionCreators';

import BookApp from './book/BookApp';
// import TodoApp from './todo/todoApp';
import GithubApp from './github/GithubApp';
import EmployeeApp from './employee/EmployeeApp';



import './styleRoot';

let store = configStore;

const App = ({children}) => (
		<div>
	        <h1>My App</h1>
	        <button className="btn btn-success white">Hey bootstrap</button>
	        <ul>
	          <li><Link to="/book-app">Book App</Link></li>
	          <li><Link to="/github-app">Github App</Link></li>
	          <li><Link to="/employee-app">Employee App</Link></li>
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
					<Route path='book-app' component={BookApp} />
					<Route path='github-app' component={GithubApp} />
					<Route path='employee-app' component={EmployeeApp} />
				</Route>
			</Router>
		</Provider>
	);

render(Routes, document.getElementById('react'));
