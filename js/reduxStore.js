import thunk from 'redux-thunk';
import simpleLogger from './middlewares/simpleLogger';
import accessStoreMiddleware from './middlewares/accessStoreMiddleware';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import storage from './utils/localStorage.util';
// import throttle from 'lodash/throttle';

const REDUX_STATE = 'REDUX_STATE';


const saveStateToLocalStorage = state => storage.set(REDUX_STATE, state);
const getStateFromLocalStorage = () => storage.get(REDUX_STATE);


function configStore() {

    let persistedState = getStateFromLocalStorage();

    const store = createStore(rootReducer, persistedState, compose(
        applyMiddleware(thunk, simpleLogger, accessStoreMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    store.subscribe(() => saveStateToLocalStorage(store.getState()));

    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default;

            store.replaceReducer(nextReducer);
        });
    };

    return store;
};

export default configStore;
