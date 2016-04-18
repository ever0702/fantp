import thunk from 'redux-thunk';
import simpleLogger from './middlewares/simpleLogger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';


function configStore(initState) {

    console.log('anoth hot', module.hot)
    const store = createStore(rootReducer, initState, compose(
        applyMiddleware(thunk, simpleLogger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));


    return store;
};

var store = configStore({});

if (module.hot) {
	console.log('is store really hot?')
    module.hot.accept('./rootReducer', () => {
    	console.log('reload??????????????')
        const nextReducer = require('./rootReducer').default;
        console.log(nextReducer);

        console.log('reducer is being replacing');
        store.replaceReducer(nextReducer);
    });
};

export default store;
