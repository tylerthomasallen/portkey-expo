import React from 'react';
import { View } from 'react-native';

import Map from '../map';
import HomeSearch from './home_search';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Map />
                <HomeSearch />
                {/* <Price /> */}
            </View>
        );
    }
}

export default HomeScreen;

// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Welcome',
//     };
//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <Button
//                 title="Go to Jane's profile"
//                 onPress={() => navigate('Profile', { name: 'Jane' })}
//             />
//         );
//     }
// }