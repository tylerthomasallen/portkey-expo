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

    constructor(props) {
        super(props)
        this.state = {
            lyftPrices: []
        }
    }

    async componentDidMount() {

        // const accessToken = await lyftAuthToken();
        // this.setState({ accessToken })
        // debugger;

    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

export default Price;