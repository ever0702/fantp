import {
	TransitionMotion, spring
}
from 'react-motion';
import React from 'react';


class SimpleArrayTransition extends React.Component {
	constructor(props) {
		super(props);
		let {array, key, dynamics} = props;
		this.state = {array};
		
	}

	getDefaultStyles() {
		let {key, array} = this.props;
		return this.props.array.map((item, index) => ({
			...item,
			style: {
				height: 0,
				opacity: 0,
				marginLeft: 0,
				color:'gray'
			}
		}));
	}

	getStyles() {
		let {key, array} = this.props;

		return this.props.dynamics.map((item, index) => {
			return {
				...item,
				value: item.value,
				style: {
					height: spring(40),
					opacity: spring(1),
					marginLeft: spring(100),
					color:spring('red'),
					border: '1px solid green'
				}
			}
		})
	}


	willEnter() {
		return {
			height: 0,
			opacity: 1,
		};
	}

	willLeave() {
		return {
			height: spring(0),
			opacity: spring(0),
		};
	}

	render() {
		let {children} = this.props;
		console.log(typeof children);

		return (
			<TransitionMotion
				defaultStyles={this.getDefaultStyles()}
				styles={this.getStyles()}
				willLeave={this.willLeave}
				willEnter={this.willEnter}
			>
				{children}
			</TransitionMotion>
			)


	}

}

export default SimpleArrayTransition;
