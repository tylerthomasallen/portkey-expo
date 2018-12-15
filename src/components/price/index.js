import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Linking } from 'react-native';
import { connect } from 'react-redux';
import { uberCost } from '../../api/uber';
import { lyftCost } from '../../api/lyft';
import { getLyftCost } from '../../actions/lyft';
import { Ionicons } from '@expo/vector-icons';
import Loading from '../loading';
import { NavigationEvents } from 'react-navigation';

import { LYFT_CLIENT_ID } from '../../constants/keys';

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
        fontSize: 24
    },

    carTypeTitleLyft: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ff00bf'
    },

    price: {
        fontWeight: 'bold',
        fontSize: 24
    },

    lyftPrice: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ff00bf' 
    },

    eta: {
        color: '#352384'
    }
})


class Price extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lyftPrice: '',
            uberPrice: '',
            loading: true,
            localOrigin: '',
            localDestination: ''
        }
    }

    linkToLyft = () => {
        const { origin, destination } = this.props;
        Linking.openURL(`https://lyft.com/ride?id=lyft&pickup[latitude]=${origin.lat}&pickup[longitude]=${origin.lng}&partner=${LYFT_CLIENT_ID}&destination[latitude]=${destination.lat}&destination[longitude]=${destination.lng}`)
    }

    linkToUber = () => {
        const { origin, destination } = this.props;
        Linking.openURL(`https://m.uber.com/ul/?action=setPickup&pickup[latitude]=${origin.lat}&pickup[longitude]=${origin.lng}&pickup[nickname]=${origin.address}&dropoff[latitude]=${destination.lat}&dropoff[longitude]=${destination.lng}&dropoff[formatted_address]=${destination.address}`);
    }


    async componentWillMount() {
        const { origin, destination, authToken } = this.props;
        
        await this.setState({ localOrigin: origin, localDestination: destination})

        const lyftPrice = await lyftCost({ origin, destination, authToken })
        await this.setState({ lyftPrice });

        const uberPrice = await uberCost({origin, destination});
        await this.setState({ uberPrice });

        await this.setState({loading: false})
        
    }

    loadComponent = async () => {
        const { origin, destination, authToken } = this.props;
        const { localOrigin, localDestination } = this.state;

        if (localOrigin.address !== origin.address || localDestination.address !== destination.address) {
            await this.setState({ loading: true })
            const lyftPrice = await lyftCost({ origin, destination, authToken })
            await this.setState({ lyftPrice })
            const uberPrice = await uberCost({ origin, destination });
            await this.setState({ uberPrice });
            await this.setState({ loading: false })
        }

    }

    render() {
        const { uberPrice, loading, lyftPrice } = this.state;

        if (loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <View style={styles.container}>
                    <NavigationEvents 
                    onWillFocus={() => this.loadComponent()}
                    />
                    <Text style={styles.title}>
                        Economy
                </Text>
                    <Text style={styles.subtitle}>
                        Affordable rides, all to yourself :)
                </Text>

                    <TouchableHighlight onPress={() => this.linkToLyft()} underlayColor='white'>
                        <View style={styles.lyftPriceContainer}>
                            <View style={styles.leftSide}>
                                <Ionicons name="ios-car" style={styles.lyftCar} />
                                <View style={styles.carTypeTitleContainer}>
                                    <Text style={styles.carTypeTitleLyft}>Lyft</Text>
                                    {/* <View style={styles.personContainer}>
                                    <Ionicons name="ios-person" style={styles.person} />
                                    <Text style={{ fontSize: 12 }}>1-4</Text>
                                </View> */}
                                </View>
                            </View>
                            <View>
                                <Text style={styles.lyftPrice}>~{lyftPrice}</Text>
                                {/* <Text style={styles.eta}>11:20 AM</Text> */}
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.linkToUber()} underlayColor="white">
                        <View style={styles.priceContainer}>
                            <View style={styles.leftSide}>
                                <Ionicons name="ios-car" style={styles.uberCar} />
                                <View style={styles.carTypeTitleContainer}>
                                    <Text style={styles.carTypeTitle}>Uber</Text>
                                    {/* <View style={styles.personContainer}>
                                    <Ionicons name="ios-person" style={styles.person} />
                                    <Text style={{ fontSize: 12 }}>1-4</Text>
                                </View> */}
                                </View>
                            </View>
                            <View>
                                <Text style={styles.price}>~{uberPrice}</Text>
                                {/* <Text style={styles.eta}>11:20 AM</Text> */}
                            </View>
                        </View>

                    </TouchableHighlight>


                </View>

            )
        }  
    }
}

const mapStateToProps = ({ origin, destination, authToken, lyftPrice }) => {
    return {
        origin,
        destination,
        authToken
    }
};

const mapDispatchToProps = dispatch => ({
    getLyftCost: (tripData) => dispatch(getLyftCost(tripData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Price);