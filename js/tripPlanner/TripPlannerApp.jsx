import React, {PropTypes} from 'react';
import './tripPlannerApp.scss';
import NavContainerShell from '../partials/NavContainerShell';
import TreeView from '../commonComponents/TreeView';
import TripPlannerDashboard from './cmps/TripPlannerDashboard';
import Footer from '../partials/Footer';

// import {NodeGroup, NodeEntity, composeNodeGroupFromJsonArray} from '../../isomorphic/utils/treeUtils';




var tree = [{
  id: 1,
  name: 'root',
  children: [{
    id: 2,
    name: '2'
  }, {
    id: 3,
    name: '3'
  }]
}, {
  id: 4,
  name: '4r',
  children: [{
  	id: 5,
  	name: '5',
  	children: [{
  		id: 6,
  		name: 6
  	}]
  }]
}];

// var myGroup = composeNodeGroupFromJsonArray(tree, 'children');

// myGroup.applyFn(v=> console.log(v.name))



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
