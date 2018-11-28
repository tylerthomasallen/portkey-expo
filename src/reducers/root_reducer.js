import { combineReducers } from 'redux';
import currentLocation from './current_location_reducer';
import authToken from './auth_token';

const rootReducer = combineReducers({
    currentLocation,
    authToken
});

export default rootReducer;