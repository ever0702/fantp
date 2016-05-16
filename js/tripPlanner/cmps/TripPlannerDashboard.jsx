import React from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import TreeView from '../../commonComponents/TreeView';
import SignupForm from '../../auth/SignupForm';
import navHistory from '../../utils/navHistory';
import PlanStep from './PlanStep';
import TripSummary from './TripSummary';
import {toggleStepNode, fetchStepNodes} from '../tripPlannerActions';
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
		loggedIn: state.auth.username
	})
)
class TripPlannerDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state= {showModal: false};
		this.onToggleNode = this.onToggleNode.bind(this);
		this.openSignupModal = this.openSignupModal.bind(this);
		this.closeSignupModal = this.closeSignupModal.bind(this);
		this.onNodeClick = this.onNodeClick.bind(this);
		this.onSignupSuccess = this.onSignupSuccess.bind(this);
		this.nextStepClick = this.nextStepClick.bind(this);
		
	}

	componentWillMount() {
	 	// if(!this.props.stepjs) {
	 		this.props.dispatch(fetchStepNodes());
	 	// }
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

	nextStepClick(){
		let {loggedIn} = this.props;
		if(loggedIn) {
			navHistory.push('home');
		} else {
			this.openSignupModal();
		}
	}
	render() {
		
		let {onNodeClick, nextStepClick} = this;
		let {topSteps, steps} = this.props;
		console.log(steps, 'stepconaaaa')
		return (
			<div className="trip-planner-dashboard">
				<div className="row">
					<div className="col-md-9">
						<Button onClick={e=> this.openSignupModal()}>Open Modal</Button>

						{
							topSteps && 
							topSteps.map(sp => (
									<div>
										<PlanStep level={1} key={sp.id} {...sp} onNodeClick={node => onNodeClick(node)} />
									</div>
								))
						}

						<Modal show={this.state.showModal} onHide={this.closeSignupModal} bsSize="sm">
				            <SignupForm headerClose={true} onCloseClick={this.closeSignupModal} onSignupSuccess={this.onSignupSuccess}/>
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
