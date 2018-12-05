import { combineReducers } from 'redux';
import currentLocation from './current_location_reducer';
import authToken from './auth_token';
import destination from './destination';
import origin from './origin';

const rootReducer = combineReducers({
    currentLocation,
    origin,
    destination,
    authToken
});

export default rootReducer;