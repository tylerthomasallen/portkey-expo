import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 5,
        marginBottom: 10
    },

    upperContainer: {
        margin: 10,
        marginBottom: 5
    },

    greeting: {
        fontSize: 16,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    inputContainer: {
        // fontSize: 18,
        borderColor: '#BDBDBD',
        borderWidth: .5,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 0
    },

    searchButton: {
        margin: 5,
        fontSize: 28,
        color: '#ff00bf'

    },

    input: {
        shadowOpacity: 0,
        shadowColor: 'white',
        margin: 5
    },

    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10

    },

    starContainer: {
        backgroundColor: '#ff00bf',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

    star: {
        color: 'white',
        fontSize: 24
    },

    address: {
        flexDirection: 'column'
    },

    addressTitle: {
        fontWeight: '500'
    },

    streetAddress: {
        color: '#BDBDBD'
    }

});


class SearchResult extends React.Component {

    render() {
        return (
            <TouchableHighlight style={styles.touchable} onPress={this.onPress}>
                <View style={styles.addressContainer}>
                    <View style={styles.starContainer}>
                        <Ionicons name="ios-star" style={styles.star} />
                    </View>
                    <View styles={styles.address}>
                        <Text style={styles.addressTitle}>Tyler's Place</Text>
                        <Text style={styles.streetAddress}>2713 Folsom St, San Francisco</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

}

export default SearchResult;
