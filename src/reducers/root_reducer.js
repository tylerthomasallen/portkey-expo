import { combineReducers } from 'redux';
import currentLocation from './current_location_reducer';
import authToken from './auth_token';
import destination from './destination';

const rootReducer = combineReducers({
    currentLocation,
    destination,
    authToken
});

export default rootReducer;