import React from 'react';
import NavContainerShell from '../partials/NavContainerShell';

import simpleForm from '../highOrderComponents/simpleForm';


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
							Please Confirm?
							<button className="btn btn-primary-outline">保存你的规划</button>
						</div>
					</div>

				</NavContainerShell>
			</div>
		)
	}

}


export default PlanConfirmApp;
