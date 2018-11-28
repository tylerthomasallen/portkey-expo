import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { lyftCost } from '../../api/lyft';

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 5,
        marginBottom: 10 
    }
})



class Price extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prices: []
        }
    }

    getPrices() {

    }

    async componentDidMount() {
        const prices = await lyftCost(this.props.authToken, sampleTrip);
        debugger;
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const mapStateToProps = ({ prices, authToken }) => {
    return {
        prices,
        authToken
    }
};

const mapDispatchToProps = dispatch => ({
    lyftCost: (authToken) => dispatch(lyftCost(authToken))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Price);