import { Location, Permissions } from 'expo';
import { GOOGLE_PLACES_API_KEY } from '../constants/keys';

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

export const googlePlaces = async (input, currentLocation) => {
    const { latitude, longitude } = currentLocation;
    try {
        let placesResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_PLACES_API_KEY}&location=${latitude}, ${longitude}&radius=500`
        )
        let placesJSON = await placesResponse.json();
        return placesJSON.predictions;
    } catch (error) {
        console.log(error)
    }
};

export const getLatLng = async (input) => {
    try {
        let placeSearchResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=geometry&key=${GOOGLE_PLACES_API_KEY}`

        )
        let placeSearchJSON = await placeSearchResponse.json();
        return placeSearchJSON.candidates[0].geometry.location;
    } catch (error) {
        console.log(error)
    }
}