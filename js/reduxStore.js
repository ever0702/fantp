import thunk from 'redux-thunk';
import simpleLogger from './middlewares/simpleLogger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';


function configStore(initState) {

    const store = createStore(rootReducer, initState, compose(
        applyMiddleware(thunk, simpleLogger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));


    return store;
};

var store = configStore({});

if (module.hot) {
    module.hot.accept('./rootReducer', () => {
        const nextReducer = require('./rootReducer').default;

        store.replaceReducer(nextReducer);
    });
};

export default store;
