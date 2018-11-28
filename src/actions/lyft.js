import { lyftAuthToken } from '../api/lyft';

export const RECEIVE_LYFT_TOKEN = 'RECEIVE_LYFT_TOKEN';

export const receiveLyftToken = authToken => {
    return {
        type: RECEIVE_LYFT_TOKEN,
        authToken
    };
};


export const getLyftToken = () => dispatch => {
    debugger;
    return (
        lyftAuthToken().then(
            authToken => dispatch(receiveLyftToken(authToken))
        )
    );
};