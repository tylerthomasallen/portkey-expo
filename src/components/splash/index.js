import React from 'react';
import { View } from 'react-native';

import Map from '../map';
import SplashSearch from './splash_search';
import Price from '../price';

class Splash extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Map />
                <Price />
            </View>
        );
    }
}

//  <SplashSearch />

export default Splash;