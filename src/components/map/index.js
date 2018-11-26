import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import Axios from 'axios';
const base64 = require('base-64');

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
        
        // Used to get access token for lyft API, which expires daily. Commented out for now to avoid getting a new token every refresh
        
        // debugger
        // try {
        //     let tokenRes = await fetch('https://api.lyft.com/oauth/token', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': "Basic " + base64.encode("aERGoL7SWDbx:GjX02y9Rrp3q79obFfhHUW_Y4zZCiHe3")
        //         },
        //         body: JSON.stringify({
        //             grant_type: "client_credentials",
        //             scope: 'public',
        //         })
        //     });
        //     let tokenResJSON = await tokenRes.json();
        //     let token = tokenResJSON.access_token;
        //     this.setState({accessToken: token})
        //     debugger;
        // } catch (error) {
        //     console.log(error)
        // }

        try {
            let costResponse = await fetch(
                `https://api.lyft.com/v1/cost?start_lat=${sampleTrip.startLat}&start_lng=${sampleTrip.startLng}&end_lat=${sampleTrip.endLat}&end_lng=${sampleTrip.endLng}`, {
                method: 'GET',
                headers: {
                    'Authorization': `bearer ${this.state.accessToken}`
                }
            });
            let costJSON = await costResponse.json();
            debugger;
        } catch (error) {
            console.log(error)
        }

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