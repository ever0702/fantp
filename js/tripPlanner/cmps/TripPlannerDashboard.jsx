import React from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import TreeView from '../../commonComponents/TreeView';
import SignupForm from '../../auth/SignupForm';
import navHistory from '../../utils/navHistory';
import TripStep from './TripStep';
import TripSummary from './TripSummary';
import {toggleTripUnit} from '../tripPlannerActions';


const NodeTmp = ({label}) => (
	<h4 style={{backgroundColor:'orange'}}>{label+'hahahah'}</h4>
);

@connect(
	state => ({
		steps: state.tripPlanner.steps
	})
)
class TripPlannerDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state= {showModal: false};
		this.onToggleNode = this.onToggleNode.bind(this);
		this.openSignupModal = this.openSignupModal.bind(this);
		this.closeSignupModal = this.closeSignupModal.bind(this);
		this.onUnitClick = this.onUnitClick.bind(this);
		this.onSignupSuccess = this.onSignupSuccess.bind(this);
		
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
		navHistory.push('/home-app');
	}

	onUnitClick(unit) {
		console.log('unit click fired ', unit)
		this.props.dispatch(toggleTripUnit(unit));
		this.forceUpdate();

	}
	render() {
		
		let {onUnitClick} = this;
		let {steps} = this.props;
		console.log(steps, 'stepconaaaa')
		return (
			<div className="trip-planner-dashboard">
				<div className="row">
					<div className="col-md-9">
						<TreeView NodeTmp={NodeTmp} treeData = {steps} iconClick={nd => this.onToggleNode(nd) } />
						<Button onClick={e=> this.openSignupModal()}>Open Modal</Button>

						{
							steps.map(sp => (
									<div>
										<TripStep key={sp.id} stepConfig={sp} onUnitClick={onUnitClick} />
									</div>
								))
						}

						<Modal show={this.state.showModal} onHide={this.closeSignupModal}>
				            <SignupForm headerClose={true} onCloseClick={this.closeSignupModal} onSignupSuccess={this.onSignupSuccess}/>
				        </Modal>
					</div>
					<div className="col-md-3">
						<TripSummary />
					</div>
				</div>
			</div>
		);

	}
}

export default TripPlannerDashboard;
