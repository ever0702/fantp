import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';
import Deferred from 'es6-deferred';
import SignupForm from '../auth/SignupForm';
import SigninForm from '../auth/SigninForm';

const authAware = passedIn => WrappedCmp => {
	
	@connect(
		state => ({
			loggedIn: state.auth.username
		})
	)
	class Wrapper extends React.Component {
		state = {showModal: false, showSignup: true, showSignin: false};
	    constructor(props) {
	        super(props);
	        this.props = props;
	        this.authDfd = new Deferred();

			this.openSignupModal = this.openSignupModal.bind(this);
			this.closeSignupModal = this.closeSignupModal.bind(this);
			this.onSigninClick = this.onSigninClick.bind(this);
			this.onSignupClick = this.onSignupClick.bind(this);
			this.onAuthSuccess = this.onAuthSuccess.bind(this);
			this.doAuth = this.doAuth.bind(this);
	    }

		openSignupModal() {
			this.setState({showModal: true});
		}

		closeSignupModal() {
			this.setState({showModal: false});
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

	    doAuth() {
	    	console.log(this.props)
	    	if(this.props.loggedIn) return Promise.resolve(true);

	    	this.openSignupModal();
	    	return this.authDfd.promise;	

	    }

	    onAuthSuccess() {
			this.authDfd.resolve(true);
			this.setState({showModal: false});
	    }

	    render() {
	    	let {showModal, showSignup, showSignin} = this.state;
	    	let {onSigninClick, onSignupClick} = this;
	    	return (
				<div className="auth-aware">
					<WrappedCmp {...this.props} doAuth={this.doAuth}/>
					<Modal show={this.state.showModal} onHide={this.closeSignupModal} bsSize="sm">
						{
							showSignup&&
				            <SignupForm headerClose={true} onCloseClick={this.closeSignupModal} onSignupSuccess={e => this.onAuthSuccess()} onSigninClick={onSigninClick}/>
						}
						{
							showSignin&&
				            <SigninForm headerClose={true} onCloseClick={this.closeSignupModal} onSigninSuccess={e => this.onAuthSuccess()} onSignupClick={onSignupClick}/>
						}
			        </Modal>
					
				</div>
				
	    	)
	    }
	}
	
	return Wrapper;
	

}

export default authAware;
