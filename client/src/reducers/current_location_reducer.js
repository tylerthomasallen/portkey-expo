import { SET_CURRENT_LOCATION } from '../actions/google';

const currentLocationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_CURRENT_LOCATION:
            return action.payload
        default:
            return state;
    }
};

export default currentLocationReducer;