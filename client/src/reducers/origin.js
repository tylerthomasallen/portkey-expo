import { RECEIVE_ORIGIN } from '../actions/route';

const originReducer = (state = {address: ''}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ORIGIN:
            return action.payload;
        default:
            return state;
    }
}

export default originReducer;