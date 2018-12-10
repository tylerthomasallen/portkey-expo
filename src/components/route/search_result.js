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

    onPress = (description) => {
        console.log(description);
    }

    render() {
        const { description } = this.props;
        const arr = description.split(', ');
        const state = arr[arr.length -2];
        const city = arr[arr.length -3]
        const streetAddress = city + ', ' + state;

        return (
            <TouchableHighlight onPress={() => this.onPress(description)}>
                <View style={styles.addressContainer}>
                    <View style={styles.starContainer}>
                        <Ionicons name="ios-star" style={styles.star} />
                    </View>
                    <View styles={styles.address}>
                        <Text style={styles.addressTitle}>{description}</Text>
                        <Text style={styles.streetAddress}>{streetAddress}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

}

export default SearchResult;

