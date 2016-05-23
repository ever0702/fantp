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
		steps: state.tripPlanner.steps,
		topSteps: state.tripPlanner.steps&&getTopSteps(state.tripPlanner.steps),
		loggedIn: state.auth.username,
		activePaths: state.tripPlanner.activePaths,
		expandedRoot: state.tripPlanner.expandedRoot
	})
)
class TripPlannerDashboard extends React.Component {
	state = {showModal: false, showSignup: true, showSignin: false};
	constructor(props) {
		super(props);
		this.onToggleNode = this.onToggleNode.bind(this);
		this.openSignupModal = this.openSignupModal.bind(this);
		this.closeSignupModal = this.closeSignupModal.bind(this);
		this.onNodeClick = this.onNodeClick.bind(this);
		this.onSignupSuccess = this.onSignupSuccess.bind(this);
		this.nextStepClick = this.nextStepClick.bind(this);
		this.expandRoot = this.expandRoot.bind(this);
		this.onSigninClick = this.onSigninClick.bind(this);
		this.onSignupClick = this.onSignupClick.bind(this);
	}

	componentWillMount() {
	 	if(!this.props.steps) {
	 		this.props.dispatch(fetchStepNodes());
	 	}
	}

	onToggleNode(nd) {
		let {state} = this;
		nd.expand = !!!nd.expand;
		this.forceUpdate();
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

	onNodeClick(unit) {
		console.log('unit click fired ', unit)
		this.props.dispatch(toggleStepNode(unit));
		this.forceUpdate();
	}

	expandRoot(_id) {
		this.props.dispatch(expandRoot(_id));
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

	render() {
		
		let {onNodeClick, nextStepClick, onSigninClick, onSignupClick} = this;
		let {topSteps, steps, activePaths, expandedRoot} = this.props;
		let {showSignin, showSignup} = this.state;
		const isCompleted = sp => {
			if(!activePaths[sp._id] || activePaths[sp._id].length==0) return false;
			let lastItm = activePaths[sp._id][activePaths[sp._id].length-1];
			return steps[lastItm].childSteps==null;
		}
		return (
			<div className="trip-planner-dashboard">
				<PlanEditForm/>
				<div className="row">
					<div className="col-md-9">
					<PlanStartForm />
						{
							topSteps && 
							topSteps.map(sp => (
									<div>
										<PlanStep completed={isCompleted(sp)} expanded={expandedRoot==sp._id} level={1} key={sp._id} {...sp} onNodeClick={node => onNodeClick(node)} expandRoot={this.expandRoot}/>
									</div>
								))
						}

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
				<Button onClick={e=> this.onNextStepClick()}>Open Modal</Button>
			</div>
		);

	}
}

export default TripPlannerDashboard;
