import React from 'react';
import {connect} from 'react-redux';
import NavContainerShell from '../partials/NavContainerShell';

import AddStepNode from './cmps/AddStepNode';

@connect()
class DashboardApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<NavContainerShell>	
					<h3>Hello I am the dashboard </h3>
					<AddStepNode />

				</NavContainerShell>
			);
	}
}

export default DashboardApp;
