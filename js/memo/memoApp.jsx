import React from 'react';
import './memoApp.scss';

import NavContainerShell from '../partials/NavContainerShell';
import AddStoryForm from './cmps/AddStoryForm';
import MemoDashboard from './cmps/MemoDashboard';


const MemoApp = () => (
		<NavContainerShell>
			<div className="memo-page">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<AddStoryForm />
						</div>
					</div>
					<div className="row">
						<MemoDashboard />
					</div>
				</div>	
			</div>
		</NavContainerShell>
	);

export default MemoApp;
