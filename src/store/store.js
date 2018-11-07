import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import createSagaMiddleware from 'redux-saga';


const store = createStore(
        rootReducer,
        applyMiddleware(createSagaMiddleware)
    );

export default store;