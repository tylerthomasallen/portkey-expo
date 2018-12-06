import { Location, Permissions } from 'expo';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBwf8koig1eA-aer5qBvPNhuBCz6V11E5A'

export const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        this.setState({ errorMessage: 'Location mission access denied' })
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const region = {
        latitude,
        longitude
    };

    return region;
}

export const googlePlaces = async (location) => {
    try {
        let placesResponse = await fetch(
            'https://maps.googleapis.com/maps/api/place/autocomplete', {
                method: 'GET',
                body: JSON.stringify({
                    input: '271',
                    key: GOOGLE_PLACES_API_KEY,
                    location
                })
            }
        )
        let placesJSON = await placesResponse.json();
        debugger;
    } catch (error) {
        console.log(error)
    }
};