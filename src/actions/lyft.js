import { lyftAuthToken, lyftCost } from '../api/lyft';

export const RECEIVE_LYFT_TOKEN = 'RECEIVE_LYFT_TOKEN';
export const RECEIVE_LYFT_COST = 'RECEIVE_LYFT_COST';

export const receiveLyftToken = payload => {
    return {
        type: RECEIVE_LYFT_TOKEN,
        payload
    };
};

export const receiveLyftCost = payload => {
    debugger;
    return {
        type: RECEIVE_LYFT_COST,
        payload
    }
}

export const getLyftCost = (tripData) => dispatch => {
    debugger;
    return (
        lyftCost(tripData).then(
            lyftPrice => dispatch(receiveLyftCost(lyftPrice))
        )
    )

}


export const getLyftToken = () => dispatch => {
    return (
        lyftAuthToken().then(
            authToken => dispatch(receiveLyftToken(authToken))
        )
    );
};