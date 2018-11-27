import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';
import { lyftCost } from '../../api/lyft';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 5,
        marginBottom: 10 
    }
})



class Price extends React.Component {

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

export default Price;