import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import Axios from 'axios';
import { lyftAuthToken, lyftCost } from './apiCalls';

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
});

const region = {
    latitude: 37.754090,
    longitude: -122.413934,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

const sampleTrip = {
    endLat: 37.793108,
    endLng: -122.432374,
    startLat: region.latitude,
    startLng: region.longitude
}

class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            accessToken: 'pTxkglGJvqtF9xWHoer/GDMf3pJM37/oTc+z5htSPYQfeIKIILzd3zb9uoCWAY+tBlKjgjYrCrshvChaFHjqCFSP/8SwsCIhYpxWnUB7MSPOr+U27F51zsc='
        }
    }


    async componentDidMount() {

        // get lyftAuthToken

        // const accessToken = await lyftAuthToken();
        // this.setState({accessToken})
        // debugger;

        // get prices based on sampleTrip

        // const prices = await lyftCost(this.state.accessToken, sampleTrip);
        // debugger;
    }

    renderMarkers() {
        const Marker = MapView.Marker;
        return (
            <Marker title='test' coordinate={{ latitude: 37.761867, longitude: -122.421671}} />
        );
    }

    render() {
        return (
            <MapView 
            style={styles.container}
            region={region}
            showsUserLocation
            showsMyLocationButton
            >

            {this.renderMarkers()}

            </MapView>
        );
    }
}

export default Map;