import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    blue: {
        backgroundColor: 'blue',
        flex: 1
    }
});


class SplashSearch extends React.Component {

    render() {

        return(
            <View style={
                styles.blue
            }>

            </View>
        );
    }
}

export default SplashSearch;
