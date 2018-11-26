import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';
import Axios from 'axios';
import { lyftAuthToken, lyftCost, lyftNearbyRides } from './lyftAPI';

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
            accessToken: 'pTxkglGJvqtF9xWHoer/GDMf3pJM37/oTc+z5htSPYQfeIKIILzd3zb9uoCWAY+tBlKjgjYrCrshvChaFHjqCFSP/8SwsCIhYpxWnUB7MSPOr+U27F51zsc=',
            normalDrivers: []
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

        const nearbyRides = await lyftNearbyRides(this.state.accessToken, sampleTrip);
        const normalDrivers = nearbyRides.nearby_drivers[1].drivers;
        this.setState({normalDrivers})
    }

    renderMarkers() {
        const Marker = MapView.Marker
        return (
            // <Marker title='test' coordinate={{ latitude: 37.761867, longitude: -122.421671}} />

            
                this.state.normalDrivers.map((driver, idx) => {
                    <Marker key={idx} title='test' coordinate={{latitude: driver.locations[0].lat, longitude: driver.locations[0].lng}} />
                    debugger;
                })
            
        );
    }

    render() {
        const Marker = MapView.Marker
        return (
            <MapView 
            style={styles.container}
            region={region}
            showsUserLocation
            showsMyLocationButton
            followsUserLocation
            >

            {this.state.normalDrivers.map((driver, idx) => {
                return <Marker key={idx} title='test' image={require('./car.png')} coordinate={{ latitude: driver.locations[0].lat, longitude: driver.locations[0].lng }} />
            })}

            {/* {this.renderMarkers()} */}

            </MapView>
        );
    }
}

export default Map;