import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Header from './partials/Header';

import configStore from './reduxStore';
import simpleLogger from './middlewares/simpleLogger';
import HomeApp from './home/HomeApp';
import TodoApp from './todo/TodoApp';
import BookApp from './book/BookApp';
import GithubApp from './github/GithubApp';
import EmployeeApp from './employee/EmployeeApp';


let store = configStore;


const App = ({children}) => (
		<div>
	        <Header />
	        <div className="container">
		        {children}
	        </div>
      </div>
	);

class AppRoutes extends React.Component{
	render() {

		return (

			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component = {App} >
						<IndexRoute component={BookApp} />
						<Route path='home-app' component={HomeApp} />
						<Route path='todo-app' component={TodoApp} />
						<Route path='book-app' component={BookApp} />
						<Route path='github-app' component={GithubApp} />
						<Route path='employee-app' component={EmployeeApp} />
					</Route>
				</Router>
			</Provider>

			)
	}
};

export default AppRoutes;
