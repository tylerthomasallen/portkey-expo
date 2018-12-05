import { Location, Permissions } from 'expo';

const deltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

export const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        this.setState({ errorMessage: 'Location mission access denied' })
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const region = {
        latitude,
        longitude,
        ...deltas
    };

    return region;
}