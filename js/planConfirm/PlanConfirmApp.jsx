import React from 'react';
import NavContainerShell from '../partials/NavContainerShell';

class PlanConfirmApp extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="plan-confirm-page-wrapper">
				<NavContainerShell>
					<div className="plan-confirm-page">
						<div className="container">
							THIS IS THE Confirm page
						</div>
					</div>

				</NavContainerShell>
			</div>
		)
	}

}

export default PlanConfirmApp;
