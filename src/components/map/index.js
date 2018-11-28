import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';
import { lyftAuthToken, lyftCost, lyftNearbyRides } from '../../api/lyft';
import { connect } from 'react-redux';
import { getLyftToken } from '../../actions/lyft';

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
});

const region = {
    latitude: 37.754090,
    longitude: -122.413934,
    latitudeDelta: 0.03,
    longitudeDelta: 0.01
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
            accessToken: '',
            normalDrivers: []
        }
    }


    async componentDidMount() {

        if (this.props.authToken.length <= 0) {
            await this.props.getLyftToken()
        } 
        const nearbyRides = await lyftNearbyRides(this.props.authToken, sampleTrip);
        const normalDrivers = nearbyRides.nearby_drivers[1].drivers;
        debugger;
        this.setState({normalDrivers})

        // const accessToken = await lyftAuthToken();
        // this.setState({accessToken})
        // debugger;

        // const prices = await lyftCost(this.state.accessToken, sampleTrip);
        // debugger;

    }

    renderMarkers() {
        const Marker = MapView.Marker
        return (
            // <Marker title='test' coordinate={{ latitude: 37.761867, longitude: -122.421671}} />

            
                this.state.normalDrivers.map((driver, idx) => {
                    <Marker key={idx} title='test' coordinate={{latitude: driver.locations[0].lat, longitude: driver.locations[0].lng}} />
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
            // followsUserLocation
            provider={'google'}
            >

            {this.state.normalDrivers.map((driver, idx) => {
                return <Marker key={idx} title='test' image={require('./car.png')} coordinate={{ latitude: driver.locations[0].lat, longitude: driver.locations[0].lng }} />
            })}

            {/* {this.renderMarkers()} */}

            </MapView>
        );
    }
}

const mapStateToProps = ({ prices, authToken }) => {
    return {
        prices,
        authToken
    }
};

const mapDispatchToProps = dispatch => ({
   getLyftToken: () => dispatch(getLyftToken())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);