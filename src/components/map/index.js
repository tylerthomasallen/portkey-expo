import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red',
        flex: 2
    }
});

class Map extends React.Component {

    render() {
        return (
            <View style={
                styles.red
            }>

            </View>
        );
    }
}

export default Map;