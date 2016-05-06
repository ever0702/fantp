import React from 'react';

import NavContainerShell from '../partials/NavContainerShell';
import AddStoryForm from './cmps/AddStoryForm';

const MemoApp = () => (
		<NavContainerShell>
			<div className="memo-page">
				<div className="container">
					<div className="col-md-4 col-md-offset-4">
						<AddStoryForm />
					</div>
				</div>	
			</div>
		</NavContainerShell>
	);

export default MemoApp;
