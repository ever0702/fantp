import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppRoutes from './appRoutes';
import store from './reduxStore';
import './styleRoot';

import '../isomorphic/utils/objectPolyfill';


render(
		<AppContainer>
			<AppRoutes store={store}/>
		</AppContainer>,
		document.getElementById('react')
	);

if(module.hot) {
	module.hot.accept();
}


