import React from 'react';
import {connect} from 'react-redux';

@connect()
class PlanList extends React.Component{

	constructor(props){
		super(props);
	}

	render() {
		return (
			<h3>Hello Plan List</h3>
		);
	}
}


export default PlanList;
