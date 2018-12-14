import React from 'react';
import { StyleSheet } from 'react-native';
import  MapView  from 'react-native-maps';
import { connect } from 'react-redux';
import { setCurrentLocation } from '../../actions/google';
import { getLyftToken } from '../../actions/lyft';
import { lyftNearbyRides } from '../../api/lyft';
import MapViewDirections from 'react-native-maps-directions';

import { GOOGLE_DIRECTIONS_API_KEY } from '../../constants/keys';

const deltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
});

class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            normalDrivers: [],
            region: {}
        }
    }

    // updateOrigin = async (location) => {
    //     const { receiveCurrentLocation } = this.props;
    //     await receiveCurrentLocation(location)
    // }


    async componentWillMount() {
        await this.props.setCurrentLocation();
        
        if (this.props.authToken.length <= 0) {
            await this.props.getLyftToken()
        }
        const { authToken, currentLocation } = this.props;

        const nearbyRides = await lyftNearbyRides(authToken, currentLocation);
        const normalDrivers = nearbyRides.nearby_drivers[1].drivers;
        this.setState({normalDrivers})

    }

    showDirections = () => {
        const { origin, destination } = this.props;

        if (origin.address.length >= 1 && destination.address.length >= 1) {
            return (
                <React.Fragment>

                    <MapViewDirections 
                    origin={{latitude: origin.lat, longitude: origin.lng}}
                    destination={destination.address}
                    apikey={GOOGLE_DIRECTIONS_API_KEY}
                    strokeWidth={5}
                    strokeColor="hotpink"
                    />

                    <MapView.Marker 
                        coordinate={{latitude: origin.lat, longitude: origin.lng}}
                        title={origin.address}
                        image={require('./flag-1.png')}
                        style={{height: 5, width: 5}}
                        
                        
                    />
                    <MapView.Marker 
                        coordinate={{latitude: destination.lat, longitude: destination.lng}} 
                        title={destination.address}
                        image={require('./flag-1.png')}
                    />
                </React.Fragment>
            )
        }
    }



    render() {
        const Marker = MapView.Marker
        const { currentLocation } = this.props;
        
        return (
           
                <MapView 
                style={styles.container}
                region={{...currentLocation, ...deltas}}
                showsUserLocation
                showsMyLocationButton
                followsUserLocation
                provider={'google'}
                // onUserLocationChange
                >

                {this.state.normalDrivers.map((driver, idx) => {
                    return <Marker key={idx} title='test' image={require('./car.png')} coordinate={{ latitude: driver.locations[0].lat, longitude: driver.locations[0].lng }} />
                })}

                {this.showDirections()}


                </MapView>
        );
    }
}

const mapStateToProps = ({ authToken, currentLocation, origin, destination }) => {
    return {
        authToken,
        currentLocation,
        origin,
        destination
    }
};

const mapDispatchToProps = dispatch => ({
   getLyftToken: () => dispatch(getLyftToken()),
   setCurrentLocation: () => dispatch(setCurrentLocation())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);