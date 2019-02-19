export const RECEIVE_ORIGIN = 'RECEIVE_ORIGIN';
export const RECEIVE_DESTINATION = 'RECEIVE_DESTINATION';

export const setOrigin = payload => {
    return {
        type: RECEIVE_ORIGIN,
        payload
    }
}

export const setDestination = payload => {
    return {
        type: RECEIVE_DESTINATION,
        payload
    }
}

