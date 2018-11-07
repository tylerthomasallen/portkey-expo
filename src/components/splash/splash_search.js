import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        margin: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    }
});


class SplashSearch extends React.Component {

    render() {

        return(
            <View style={
                styles.container
            }>
            <Text>
                Hi there
            </Text>

            <Text style={styles.title}>
                Where are you going?            
            </Text>

            </View>
        );
    }
}

export default SplashSearch;
