import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {Router, Route, IndexRoute, Link} from 'react-router';
import navHistory from './utils/navHistory';
import Header from './partials/Header';
import appInit from './appInit';
import configStore from './reduxStore';
import simpleLogger from './middlewares/simpleLogger';
import HomeApp from './home/homeApp';
import TripPlannerApp from './tripPlanner/TripPlannerApp';
import SignupPage from './auth/SignupPage';
import SigninPage from './auth/SigninPage';
import DashboardApp from './dashboard/DashboardApp';
import PlanConfirmApp from './planConfirm/PlanConfirmApp';
import PlanEditApp from './plan/PlanEditApp';


let store = configStore;


@connect()
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		appInit(this.props.dispatch);
	}
	render() {
		return (
			<div id="app-body">
				{this.props.children}
	      </div>
		)
	}
}

// const App = ({children}) => (
// 		<div id="app-body">
// 			{children}
//       </div>
// 	);

class AppRoutes extends React.Component{
	render() {

		return (

			<Provider store={store}>
				<Router history={navHistory}>
					<Route path='/' component = {App} >
						<IndexRoute component={HomeApp} />
						<Route path='home' component={HomeApp} />
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
