import React, {PropTypes} from 'react';
import './tripPlannerApp.scss';
import NavContainerShell from '../partials/NavContainerShell';
import TreeView from '../commonComponents/TreeView';
import TripPlannerDashboard from './cmps/TripPlannerDashboard';
import Footer from '../partials/Footer';


class TripPlannerApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="trip-plan-bg">
				<NavContainerShell containerType="container-fluid">
					<div className="trip-plan-page">
							<div className="row">
							</div>
							<TripPlannerDashboard />
					</div>
				</NavContainerShell>
				<Footer />
			</div>
		);
	}
}

export default TripPlannerApp;
