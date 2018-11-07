import { combineReducers } from 'redux';
import currentLocation from './current_location_reducer';

const rootReducer = combineReducers({
    currentLocation
});

export default rootReducer;