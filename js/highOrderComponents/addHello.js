import React from 'react';
import {Component} from 'react';

const addHello = WrappedCmp => class extends Component {

	constructor(props){
		super(props);
		this.state={hello: 'MyHello from HighOrder'};
	}

	componentDidMount() {
		this.setState({hello: 'hello changed from highorder'});
	}

	render() {
		return (
				<WrappedCmp {...this.props} hello={this.state.hello} />
			)
	}

};

export default addHello;
