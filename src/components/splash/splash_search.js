import React from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
    },

    inputContainer: {
        fontSize: 18,
        borderColor: '#BDBDBD',
        borderWidth: .5,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        shadowColor: '#BDBDBD',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 2
    },

    searchButton: {
        margin: 5,
        fontSize: 28,
        color: 'blue',
        fontWeight: '900'

    },

    input: {
        shadowOpacity: 0,
        shadowColor: 'white',
        margin: 5

    },

    shadow: {
        backgroundColor: '#BDBDBD',
        padding: .5,
        width: '98%',
        alignSelf: 'center',
        borderRadius: 5,
        opacity: .3
    },

    addressContainer: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    starContainer: {
        backgroundColor: 'pink',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    star: {
        color: 'white',
        fontSize: 24
    },

    address: {
        flexDirection: 'column',
    }


    
});


class SplashSearch extends React.Component {


    render() {

        return(
            <View style={
                styles.container
            }>
                <Text style={{fontSize: 18}}>
                    Hi there
                </Text>

                <Text style={styles.title}>
                    Where are you going?            
                </Text>

                <View style={styles.inputContainer}>
                    <Ionicons name="ios-search" style={styles.searchButton}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Search destination"
                    >  
                    </TextInput>
                </View>
            
                <View style={styles.shadow} />

                <View style={styles.addressContainer}>
                    <View style={styles.starContainer}>
                        <Ionicons name="ios-star" style={styles.star}/>
                    </View>
                    <View styles={styles.address}>
                        <Text>Ginnas Place</Text>
                        <Text>2268 Jackson St, San Francisco</Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default SplashSearch;
