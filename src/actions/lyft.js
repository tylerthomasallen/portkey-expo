import { lyftAuthToken } from '../api/lyft';

export const RECEIVE_LYFT_TOKEN = 'RECEIVE_LYFT_TOKEN';

export const receiveLyftToken = payload => {
    return {
        type: RECEIVE_LYFT_TOKEN,
        payload
    };
};


export const getLyftToken = () => dispatch => {
    return (
        lyftAuthToken().then(
            authToken => dispatch(receiveLyftToken(authToken))
        )
    );
};