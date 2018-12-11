import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { lyftCost } from '../../api/lyft';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        marginRight: 15,
        marginLeft: 15

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    subtitle: {
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },

    lyftCar: {
        color: '#ff00bf',
        fontSize: 60
    },

    uberCar: {
        color: 'black',
        fontSize: 60
    },

    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 10
    },

    lyftPriceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#ff00bf'
    },

    personContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    person: {
        fontSize: 15,
        marginRight: 3
    },

    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    carTypeTitleContainer: {
        marginLeft: 10
    },

    carTypeTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },

    price: {
        fontWeight: 'bold',
        fontSize: 18
    },

    eta: {
        color: '#352384'
    }
})

const region = {
    latitude: 37.754090,
    longitude: -122.413934,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

const sampleTrip = {
    endLat: 37.793108,
    endLng: -122.432374,
    startLat: region.latitude,
    startLng: region.longitude
}



class Price extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           lyftPrice: ''
        }
    }

    getPrices() {

    }

    convertPriceFromCents = (price) => {
        const dollars = parseInt(price / 100);
        let cents = price % 100;

        if (cents < 10) {
            cents = `0${cents}`
        }

        debugger;

        return `$${dollars}.${cents}`;
    }

    async componentWillMount() {
        const { origin, destination, authToken } = this.props;

        const prices = await lyftCost({origin, destination, authToken});
        const estimatedPriceCentsMin = prices.cost_estimates[1].estimated_cost_cents_min;
        const estimatedPriceCentsMax = prices.cost_estimates[1].estimated_cost_cents_max;
        const average = ((estimatedPriceCentsMin + estimatedPriceCentsMax) / 2)

        debugger;

        const formattedAverage = this.convertPriceFromCents(average);
        
        this.setState({lyftPrice: `${formattedAverage}`})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Economy
                </Text>
                <Text style={styles.subtitle}>
                    Affordable rides, all to yourself :)
                </Text>

                <View style={styles.lyftPriceContainer}>
                    <View style={styles.leftSide}>
                        <Ionicons name="ios-car" style={styles.lyftCar} />
                        <View style={styles.carTypeTitleContainer}>
                            <Text style={styles.carTypeTitle}>Lyft Line</Text>
                            <View style={styles.personContainer}>
                                <Ionicons name="ios-person" style={styles.person} />
                                <Text style={{fontSize: 12}}>1-2</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.price}>{this.state.lyftPrice}</Text>
                        <Text style={styles.eta}>11:20 AM</Text>
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <View style={styles.leftSide}>
                        <Ionicons name="ios-car" style={styles.uberCar} />
                        <View style={styles.carTypeTitleContainer}>
                            <Text style={styles.carTypeTitle}>Uber Pool</Text>
                            <View style={styles.personContainer}>
                                <Ionicons name="ios-person" style={styles.person} />
                                <Text style={{ fontSize: 12 }}>1-2</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.price}>$8.49</Text>
                        <Text style={styles.eta}>11:20 AM</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ origin, destination, authToken }) => {
    return {
        origin,
        destination,
        authToken
    }
};

const mapDispatchToProps = dispatch => ({
    lyftCost: (authToken) => dispatch(lyftCost(authToken))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Price);