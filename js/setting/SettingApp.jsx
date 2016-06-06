import React from 'react';
import NavContainerShell from '../partials/NavContainerShell';
import Card from '../commonComponents/Card';
import NavBarLink from '../partials/NavBarLink';
import './settingApp.scss';

class SettingApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	let {children} = this.props;
        return (
			<NavContainerShell>
				<div className="row">
					<div className="col-md-3 setting-nav">
						<Card title="Settings">
							<div className="list-group">
								<a className="list-group-item active">Basic Info</a>
								<a className="list-group-item">Change Password</a>
								<a className="list-group-item">
									<NavBarLink label="Hello Word" url="setting/change-password">Hello Word</NavBarLink>
								</a>
							</div>	
						</Card>
					</div>

					<section className="col-md-9 setting-body">
						<Card>
							{children}
						</Card>
					</section>
				</div>
			</NavContainerShell>
        );
    }
}

export default SettingApp;
