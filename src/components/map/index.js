import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import Axios from 'axios';

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
        debugger;

        return fetch('http://10.0.1.198:3000/api/lyft');

    //     Axios.get('http://localhost:3000/api/lyft')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
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