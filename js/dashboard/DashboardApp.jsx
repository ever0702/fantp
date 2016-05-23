import React from 'react';
import {connect} from 'react-redux';
import NavContainerShell from '../partials/NavContainerShell';
import {Modal} from 'react-bootstrap';
import AddStepNode from './cmps/AddStepNode';
import PlanList from './cmps/PlanList';

@connect()
class DashboardApp extends React.Component {
	state = {
		showAddStepNode: false
	};
	constructor(props) {
		super(props);
		this.addStepNodeClick = this.addStepNodeClick.bind(this);
	}

	addStepNodeClick() {
		let currentShow = this.state.showAddStepNode;
		this.setState({showAddStepNode: !currentShow});
	}

	render() {
		let {showAddStepNode} = this.state;
		return (
				<NavContainerShell>	
					<button className="btn btn-sm" onClick={this.addStepNodeClick}>Add</button>
					<Modal show={showAddStepNode} >
						<AddStepNode />
					</Modal>
					<PlanList />
				</NavContainerShell>
			);
	}
}

export default DashboardApp;
