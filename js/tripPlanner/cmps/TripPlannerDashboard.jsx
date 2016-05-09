import React from 'react';
import {connect} from 'react-redux';
import TreeView from '../../commonComponents/TreeView';
import stepConfig from '../../stepConfig';


const NodeTmp = ({label}) => (
	<h4 style={{backgroundColor:'orange'}}>{label+'hahahah'}</h4>
);

@connect()
class TripPlannerDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {step: stepConfig};
		this.onToggleNode = this.onToggleNode.bind(this);
	}

	onToggleNode(nd) {
		let {state} = this;
		nd.expand = !!!nd.expand;
		this.setState(this.state);
	}
	render() {
		
		return (
			<div className="trip-planner-dashboard">
				  <div className="form-group label-static">
				    <input type="email" className="form-control" id="i2" placeholder="placeholder attribute"/>
				    <p className="help-block">This is a hint as a <code>p.help-block.hint</code></p>
				  </div>
				Face Icon: <i className="material-icons">face</i> face
				<TreeView NodeTmp={NodeTmp} treeData = {stepConfig} iconClick={nd => this.onToggleNode(nd) } />
			</div>
		);

	}
}

export default TripPlannerDashboard;
