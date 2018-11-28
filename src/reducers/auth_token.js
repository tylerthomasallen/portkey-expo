import { RECEIVE_LYFT_TOKEN } from "../actions/lyft";

const authTokenReducer = (state = '', action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LYFT_TOKEN:
            return action.authToken;
        default:
            return state;
    }
};

export default authTokenReducer;