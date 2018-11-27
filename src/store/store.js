import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const preloadedState = {
    currentLocation: {}
};


const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    );

export default store;