import React from 'react';
import { View } from 'react-native';

import Map from '../map';
import SplashSearch from './splash_search';

class Splash extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Map />
                <SplashSearch />
            </View>
        );
    }
}

export default Splash;