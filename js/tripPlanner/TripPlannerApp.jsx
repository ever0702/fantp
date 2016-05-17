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
				<NavContainerShell>
					<div className="trip-plan-page">
						<div className="container">
							<div className="row">
							</div>
							<TripPlannerDashboard />
						</div>	
					</div>
				</NavContainerShell>
			</div>
		);
	}
}

// const TripPlannerApp = () => (
// 		<NavContainerShell>
// 			<div className="trip-plan-page">
// 				<div className="container">
// 					<div className="row">
// 						<div className="col-md-4 col-md-offset-4">
// 							Helo THere
// 						</div>
// 					</div>
// 					<div className="row">
// 						Dashboard

// 						<TreeView NodeTmp={NodeTmp} treeData = {stepConfig} iconClick={nd => nd.expand = !!!nd.expand } />
// 					</div>
// 				</div>	
// 			</div>
// 		</NavContainerShell>
// 	);

export default TripPlannerApp;
