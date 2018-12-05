import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { setCurrentLocation } from '../../actions/google';

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

    updateOrigin = async (location) => {
        const { receiveCurrentLocation } = this.props;
        await receiveCurrentLocation(location)
    }


    async componentWillMount() {
        await this.props.setCurrentLocation();
        debugger;
        // console.log(this.props.currentLocation)
        // await this.getLocationAsync()
        // debugger;
        // this.getLocationAsync();

        // if (this.state.authToken.length <= 0) {
        //     await this.props.getLyftToken()
        // } 
        // const nearbyRides = await lyftNearbyRides(this.props.authToken, sampleTrip);
        // const normalDrivers = nearbyRides.nearby_drivers[1].drivers;
        // this.setState({normalDrivers})

        // const accessToken = await lyftAuthToken();
        // this.setState({accessToken})

        // const prices = await lyftCost(this.state.accessToken, sampleTrip);

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
                region={this.props.currentLocation}
                showsUserLocation
                showsMyLocationButton
                followsUserLocation
                provider={'google'}
                onUserLocationChange={() => console.log('hello')}
                >

                {this.state.normalDrivers.map((driver, idx) => {
                    return <Marker key={idx} title='test' image={require('./car.png')} coordinate={{ latitude: driver.locations[0].lat, longitude: driver.locations[0].lng }} />
                })}


                </MapView>
        );
    }
}

const mapStateToProps = ({ currentLocation }) => {
    return {
        currentLocation
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