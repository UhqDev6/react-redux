import { applyMiddleware, createStore } from 'redux';
import { thunk, todoDeletionCheck } from './middlewares';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck, thunk));

export { store };
