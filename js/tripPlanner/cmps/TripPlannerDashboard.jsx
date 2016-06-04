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

const getTopSteps = stepObj => {
	let arr = [];
	for(let [k, v] of Object.entries(stepObj)) {
		if(!v.parentStep){
			arr.push(v);
		}
	}

	return arr;
}

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
	state = {showModal: false, showSignup: true, showSignin: false, windowWidth: window.innerWidth};
	constructor(props) {
		super(props);

		this.openSignupModal = this.openSignupModal.bind(this);
		this.closeSignupModal = this.closeSignupModal.bind(this);
		this.onSignupSuccess = this.onSignupSuccess.bind(this);
		this.nextStepClick = this.nextStepClick.bind(this);
		this.onSigninClick = this.onSigninClick.bind(this);
		this.onSignupClick = this.onSignupClick.bind(this);
		this.onNodeClick = this.onNodeClick.bind(this);
		this.changeBasicFormValue = this.changeBasicFormValue.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	componentWillMount() {
	 	if(!this.props.flatSteps) {
	 		this.props.dispatch(fetchStepNodes());
	 	}
		

	}

	openSignupModal() {
		this.setState({showModal: true});
	}

	closeSignupModal() {
		this.setState({showModal: false});
	}

	onSignupSuccess(){
		this.setState({showModal: false});
		navHistory.push('/home');
	}


	nextStepClick(){
		let {loggedIn} = this.props;
		if(loggedIn) {
			navHistory.push('plan-confirm');
		} else {
			this.openSignupModal();
		}
	}

	onSigninClick(){
		this.setState({
			showSignin: true,
			showSignup: false
		});
	}

	onSignupClick() {
		this.setState({
			showSignin: false,
			showSignup: true
		});
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
		
		let { nextStepClick, onSigninClick, onSignupClick, onNodeClick, changeBasicFormValue} = this;
		let {rootNodes, flatSteps, activeNodes} = this.props;

		let {showSignin, showSignup, windowWidth} = this.state;

		return (
			<div className="trip-planner-dashboard">
				<div className="row">
					<div className="col-md-12" ref={elm => this.node = elm}>
						<PlanEditForm svgWidth={this.getSvgWidth()-30} svgHeight={this.getSvgWidth()-30} {...this.props} onNodeClick={onNodeClick} onBasicFormValueChange={changeBasicFormValue}/>
						<Modal show={this.state.showModal} onHide={this.closeSignupModal} bsSize="sm">
							{
								showSignup&&
					            <SignupForm headerClose={true} onCloseClick={this.closeSignupModal} onSignupSuccess={e => navHistory.push('plan-confirm')} onSigninClick={onSigninClick}/>
							}
							{
								showSignin&&
					            <SigninForm headerClose={true} onCloseClick={this.closeSignupModal} onSigninSuccess={e => navHistory.push('plan-confirm')} onSignupClick={onSignupClick}/>
							}
				        </Modal>
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
