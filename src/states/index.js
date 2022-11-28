import { applyMiddleware, createStore } from 'redux';
import { thunk, todoDeletionCheck } from './middlewares';
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/reducer';
import { goalsReducer } from './goals/reducer';

const store = configureStore({
    reducer:{
        todos: todosReducer,
        goals: goalsReducer
    },
    
    middleware: [thunk, todoDeletionCheck]
});

export { store };
