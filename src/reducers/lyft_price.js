import { RECEIVE_LYFT_PRICE, RECEIVE_LYFT_COST } from '../actions/lyft';

const lyftPriceReducer = (state = '', action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_LYFT_COST:
            return action.payload
        default:
            return state;
    }
}

export default lyftPriceReducer;