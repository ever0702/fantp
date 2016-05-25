import React from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import TreeView from '../../commonComponents/TreeView';
import SignupForm from '../../auth/SignupForm';
import SigninForm from '../../auth/SigninForm';
import navHistory from '../../utils/navHistory';
import PlanStep from './PlanStep';
import TripSummary from './TripSummary';
import {toggleStepNode, fetchStepNodes, expandRoot} from '../tripPlannerActions';
import PlanStartForm from './PlanStartForm';
import PlanEditForm from './PlanEditForm';
import {isNull} from '../../../isomorphic/utils/easy';


const NodeTmp = ({label}) => (
	<h4 style={{backgroundColor:'orange'}}>{label+'hahahah'}</h4>
);

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
		flatSteps: state.stepMap.flatSteps,
		activeNodes: state.tripPlanner.activeNodes,
		rootNodes: state.stepMap.rootNodes.map(id => state.stepMap.flatSteps[id]),
		loggedIn: state.auth.username
	})
)
class TripPlannerDashboard extends React.Component {
	state = {showModal: false, showSignup: true, showSignin: false};
	constructor(props) {
		super(props);

		this.openSignupModal = this.openSignupModal.bind(this);
		this.closeSignupModal = this.closeSignupModal.bind(this);
		this.onSignupSuccess = this.onSignupSuccess.bind(this);
		this.nextStepClick = this.nextStepClick.bind(this);
		this.onSigninClick = this.onSigninClick.bind(this);
		this.onSignupClick = this.onSignupClick.bind(this);
		this.onNodeClick = this.onNodeClick.bind(this);
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

	render() {
		
		let { nextStepClick, onSigninClick, onSignupClick, onNodeClick} = this;
		let {rootNodes, flatSteps, activeNodes} = this.props;
		console.log(activeNodes, 'activeNodes')
		let {showSignin, showSignup} = this.state;

		return (
			<div className="trip-planner-dashboard">
				<div className="row">
					<div className="col-md-9">
					<PlanEditForm activeNodes={activeNodes} rootNodes={rootNodes} flatSteps={flatSteps} onNodeClick={onNodeClick} />
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
					<div className="col-md-3">
						<TripSummary nextStepClick={nextStepClick}/>
					</div>
				</div>
			</div>
		);

	}
}

export default TripPlannerDashboard;
