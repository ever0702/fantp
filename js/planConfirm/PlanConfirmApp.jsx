import React from 'react';
import {connect} from 'react-redux';
import NavContainerShell from '../partials/NavContainerShell';
import {saveTripPlan} from '../tripPlanner/tripPlanActionReducer';
// import {spring, Motion, TransitionMotion} from 'react-motion';
// import SimpleArrayTransition from '../commonComponents/SimpleTransition';
console.log(spring)

let values = [];
for(let i = 0; i<10; i++) {
	values.push({
		key: i,
		value: i
	});
}
console.log(values);

const spring = (x) => x;
@connect()
class PlanConfirmApp extends React.Component {
	
	state = {values};
	constructor(props) {
		super(props);
		this.createNewPlan = this.createNewPlan.bind(this);
	}

	createNewPlan() {
		this.props.dispatch(saveTripPlan());
	}
	
	getDefaultStyles() {
		return this.state.values.map(item => ({...item, key:String(item.value), style:{height:0, opacity: 1}}));
	}

	handleAdd(value) {
		let {values} = this.state;
		values = values.push({value});
		this.setState({values});
	}
	getStyles() {
		return this.state.values.map(item => {
			return {
				...item,
				key: String(item.value),
				style: {
					height: spring(100),
					opacity: spring(1)
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
		return (
			<div className="plan-confirm-page-wrapper">
				<NavContainerShell>
					<div className="plan-confirm-page">
						<div className="container">
							{/*<TransitionMotion
								defaultStyles={this.getDefaultStyles()}
								styles={this.getStyles()}
								willLeave={this.willLeave}
								willEnter={this.willEnter}
							>
								{
									styles => {
										return <ul>
										{
											styles.map(({key, value, style}) => <li style={style} key={key}>{value +'ddd'}</li>)
										}
										</ul>
									}
								}
							</TransitionMotion>
							<SimpleArrayTransition
								key='key'
								array={this.state.values}
								dynamics={this.state.values}
							>
							{
									styles => {
										return <ul>
										{
											styles.map(item => <li style={item.style} key={item.key}>{JSON.stringify(item)}</li>)
										}
										</ul>
									}
								}	
							</SimpleArrayTransition>
						*/}
							<button onClick={this.createNewPlan} className="btn btn-primary-outline">保存你的规划</button>
						</div>
					</div>

				</NavContainerShell>
			</div>
		)
	}

}

export default PlanConfirmApp;
