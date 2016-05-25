const accessStoreMiddleware = store => next => action => next({...action, getState: store.getState});

export default accessStoreMiddleware;
