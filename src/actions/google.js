import { getLocation, getLatLng } from '../api/google';

export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';

export const receiveCurrentLocation = payload => {
    return {
        type: SET_CURRENT_LOCATION,
        payload
    };
};

export const setCurrentLocation = () => dispatch => {
    return (
        getLocation().then(
            location => dispatch(receiveCurrentLocation(location))
        )
    );
};