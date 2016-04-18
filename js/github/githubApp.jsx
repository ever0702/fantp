import React from 'react';

import GithubUserSearch from './GithubUserSearch';
import GithubUserContainer from './cmps/GithubUserContainer';

const GithubApp = () => (
		<div>
			<h3> This is a Github User APP</h3>
			<GithubUserSearch />
			<GithubUserContainer />
		</div>
	)

export default GithubApp;
