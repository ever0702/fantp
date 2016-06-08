import React from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import SignupForm from '../../auth/SignupForm';
import SigninForm from '../../auth/SigninForm';
import navHistory from '../../utils/navHistory';
import TripSummary from './TripSummary';
import {toggleStepNode, fetchStepNodes, expandRoot, setStartForm, setPlanBasicFormValue} from '../tripPlanActionReducer';
import simpleForm from '../../highOrderComponents/simpleForm';
import PlanBasicInfoForm from '../../commonComponents/PlanBasicInfoForm';
import {isNull} from '../../../isomorphic/utils/easy';
import PlanEditForm from '../../commonComponents/PlanEditForm';

import authAware from '../../highOrderComponents/authAware';

const getTopSteps = stepObj => {
	let arr = [];
	for(let [k, v] of Object.entries(stepObj)) {
		if(!v.parentStep){
			arr.push(v);
		}
	}

	return arr;
}


@authAware()
@connect(
	state => ({
		...state.tripPlanner,
		flatSteps: state.stepMap.flatSteps,
		rootNodes: state.stepMap.rootNodes.map(id => state.stepMap.flatSteps[id]),
		loggedIn: state.auth.username
	})
)
@simpleForm({
	fields: ['peopleCountField', 'daysCountField', 'averageAgeField']
})
class TripPlannerDashboard extends React.Component {
	state = {windowWidth: window.innerWidth};
	constructor(props) {
		super(props);

		this.nextStepClick = this.nextStepClick.bind(this);
		this.onNodeClick = this.onNodeClick.bind(this);
		this.changeBasicFormValue = this.changeBasicFormValue.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	componentWillMount() {
	 	if(!this.props.flatSteps) {
	 		this.props.dispatch(fetchStepNodes());
	 	}
		

	}



	nextStepClick(){
		this.props.doAuth().then(v => {
			console.log(v, ' authed');
			navHistory.push('/plan-confirm');

		})
	}


	onNodeClick(unit) {
		console.log('unit click fired ', unit)
		this.props.dispatch(toggleStepNode(unit));
		this.forceUpdate();
	}

	changeBasicFormValue(key, value) {
		this.props.dispatch(setPlanBasicFormValue(key, value));
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	handleResize(){
		this.setState({windowWidth: window.innerWidth});
	}

	componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize);
	}

	getSvgWidth() {
		let width = 400;
		let {windowWidth} = this.state;
		if(windowWidth < 600) return windowWidth;
		if(windowWidth < 800) return windowWidth/2;
		if(windowWidth<1400) return windowWidth/3;
		return windowWidth/4;
	}

	render() {
		
		let { nextStepClick, onNodeClick, changeBasicFormValue} = this;
		let {rootNodes, flatSteps, activeNodes} = this.props;

		let {windowWidth} = this.state;

		return (
			<div className="trip-planner-dashboard">
				<div className="row">
					<div className="col-md-12" ref={elm => this.node = elm}>
						<PlanEditForm svgWidth={this.getSvgWidth()-30} svgHeight={this.getSvgWidth()-30} {...this.props} onNodeClick={onNodeClick} onBasicFormValueChange={changeBasicFormValue}/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<TripSummary nextStepClick={nextStepClick}/>
					</div>
				</div>
			</div>
		);

	}
}

export default TripPlannerDashboard;
