import React, {PropTypes} from 'react';
import './tripPlannerApp.scss';
import NavContainerShell from '../partials/NavContainerShell';
import TreeView from '../commonComponents/TreeView';
import TripPlannerDashboard from './cmps/TripPlannerDashboard';


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
			</div>
		);
	}
}

export default TripPlannerApp;
