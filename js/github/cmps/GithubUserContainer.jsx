import React from 'react';
import GithubUser from './GithubUser';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
	user: state.githubApp.user
});

const GithubUserContainer = connect(mapStateToProps)(GithubUser);

export default GithubUserContainer;
