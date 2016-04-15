import React from 'react';
import {connect} from 'react-redux';
// import RxDom from '../rxUtils/rxDom';
import {searchGithubUser} from './githubActionCreators';

let GithubUserSearch = ({dispatch}) => {
	let input;


	let handlerInputChange = value =>dispatch(searchGithubUser(value));

	return (
			<div>
				<form>
					<input onChange={(e) => {console.log(e.target.value), handlerInputChange(e.target.value)} } ref={node => input = node} />
				</form>
			</div>
		);
}


GithubUserSearch = connect()(GithubUserSearch);

export default GithubUserSearch;
