import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, Link} from 'react-router';
import navHistory from './utils/navHistory';
import Header from './partials/Header';

import configStore from './reduxStore';
import simpleLogger from './middlewares/simpleLogger';
import HomeApp from './home/homeApp';
import TodoApp from './todo/todoApp';
import TripPlannerApp from './tripPlanner/TripPlannerApp';
import SignupPage from './auth/SignupPage';
import SigninPage from './auth/SigninPage';
import DashboardApp from './dashboard/DashboardApp';
import PlanConfirmApp from './planConfirm/PlanConfirmApp';
import PlanEditApp from './plan/PlanEditApp';


let store = configStore;

const App = ({children}) => (
		<div id="app-body">
			{children}
      </div>
	);

class AppRoutes extends React.Component{
	render() {

		return (

			<Provider store={store}>
				<Router history={navHistory}>
					<Route path='/' component = {App} >
						<IndexRoute component={HomeApp} />
						<Route path='home' component={HomeApp} />
						<Route path='todo-app' component={TodoApp} />
						<Route path='signup' component={SignupPage} />
						<Route path='signin' component={SigninPage} />
						<Route path='planner' component={TripPlannerApp} />
						<Route path='plan-confirm' component={PlanConfirmApp} />
						<Route path='dashboard' component={DashboardApp} />
						<Route path='plans/:planId' component={PlanEditApp} />
					</Route>
				</Router>
			</Provider>

			)
	}
};

export default AppRoutes;
