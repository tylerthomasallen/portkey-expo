import { RECEIVE_DESTINATION } from '../actions/route';

const destinationReducer = (state = '', action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_DESTINATION:
            return action.payload;
        default:
            return state;
    }
}

export default destinationReducer;