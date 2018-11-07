import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';

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

    render() {
        return (
            <MapView 
            style={styles.container}
            region={region}
            showsUserLocation
            showsMyLocationButton
            >

            </MapView>
        );
    }
}

export default Map;