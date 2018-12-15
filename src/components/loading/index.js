import React from 'react';
import { View, StatusBar, Text, ActivityIndicator, StyleSheet, Image, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    background: {
        
    },


    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        flexDirection: 'column',
        width: '100%', 
        height: '100%', 
        flex: 1

    },

    title: {
        color: '#352384',
        fontSize: 35,
        fontFamily: "Zapfino",
        fontWeight: 'bold'

    }

    
})


class Loading extends React.Component {

    render() {
        return (

            <ImageBackground source={require('./fallout.jpg')} style={styles.container}>
            
                    {/* <Text style={styles.title}>Hang Tight</Text> */}
                    <ActivityIndicator color="white" size="large" />

            </ImageBackground>
            
        )
    }
}

// lyft pink for loader: #ff00bf

export default Loading;