import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppRoutes from './appRoutes';
import configStore from './reduxStore';
import './styleRoot';

let store = configStore;

render(
		<AppContainer
			component={AppRoutes}
			props={{store}}
		/>,
		document.getElementById('react')
	);

if(module.hot) {
	module.hot.accept();
}


