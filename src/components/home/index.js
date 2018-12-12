import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Map from '../map';
import HomeSearch from './home_search';
import Price from '../price';
import { connect } from 'react-redux';
import NavOptions from '../nav';


class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <NavOptions />
    };

    render() {
        const { origin, destination } = this.props;

        if (origin.address.length >= 1 && destination.address.length >= 1) {
            return (
                <View style={{ flex: 1 }}>
                    <Map />
                    <Price />
                </View> 
            )
        } else {
            return (
                <View style={{flex: 1}}>
                    <Map />
                    <HomeSearch />
                </View>
            )
        }
    }
}

const mapStateToProps = ({ origin, destination }) => {
    return {
        origin,
        destination
    }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)