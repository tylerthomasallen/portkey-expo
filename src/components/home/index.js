import React from 'react';
import { View } from 'react-native';

import Map from '../map';
import HomeSearch from './home_search';

class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Welcome'
    // };

    render() {
        return (
            <View style={{flex: 1}}>
                <Map />
                <HomeSearch />
            </View>
        );
    }
}

export default HomeScreen;