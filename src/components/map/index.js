import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import Axios from 'axios';
let base64 = require('base-64');

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

class Map extends React.Component {


    componentDidMount() {

        fetch('https://api.lyft.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Basic " + base64.encode("aERGoL7SWDbx:GjX02y9Rrp3q79obFfhHUW_Y4zZCiHe3")
            },
            body: JSON.stringify({
                grant_type: "client_credentials",
                scope: 'public',
            }),
        }).then(res => res.json())
        .then(resJSON => console.log(resJSON));
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