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
								<NavBarLink indexLink={true} url="setting">基本信息</NavBarLink>
								<NavBarLink  url="setting/change-password">修改密码</NavBarLink>
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
