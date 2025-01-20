import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './root-Reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const Store = createStore(rootReducer, undefined, composedEnhancers);
