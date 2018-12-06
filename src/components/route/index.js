import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import SearchResult from './search_result';
import { googlePlaces } from '../../api/google';
import { withNavigation } from 'react-navigation';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBwf8koig1eA-aer5qBvPNhuBCz6V11E5A'

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
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },

    inputContainer: {
        borderColor: '#BDBDBD',
        borderWidth: .5,
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
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
        margin: 5,
        fontSize: 20,
        width: '75%'
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
    },

    resultsContainer: {
        marginTop: 10
    }



});


class RouteSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Where are you going?',
            origin: '',
            destination: '',
            results: []
        }
    }

    componentDidMount() {
    }

    handleInput = async (text, type) => {
        this.setState({[type]: text})

        if (text.length >= 2) {
           const googleResponse = await googlePlaces(text)
           debugger;
           this.setState({results: googleResponse})
        }

        if (text.length <= 1) {
            this.setState({results: []})
        }

    }

    handlePress = (location) => {
        const { title, origin, destination } = this.state;
        debugger;
        title === 'Pickup' ? this.setState({origin: location, results: []}) : this.setState({destination: location, results: []})

        if (origin.length >= 1 && destination.length >= 1) {
            navigate('Home');
        }

    }

    render() {
        return (

            <View style={
                styles.container
            }>

                <View style={styles.upperContainer}>

                    <Text style={styles.title}>
                        {this.state.title}
                    </Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.searchButton}>Start</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Search pickup spot"
                            placeholderTextColor='black'
                            onChangeText={(text) => this.handleInput(text, 'origin')}
                            onTouchStart={() => this.setState({title: 'Pickup', results: [], origin: ''})}
                            value={this.state.origin}
                        >
                        </TextInput>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.searchButton}>End</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Search destination"
                            placeholderTextColor='black'
                            onChangeText={(text) => this.handleInput(text, 'destination')}
                            onTouchStart={() => this.setState({ title: 'Dropoff', results: [], destination: ''})}
                            value={this.state.destination}
                        >
                        </TextInput>
                    </View>


                </View>

                {/* <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2}
                    listViewDisplayed='auto'
                    fetchDetails={true}
                    onPress={(data) => console.log(data)}
                    query={{
                        key: GOOGLE_PLACES_API_KEY
                    }}
                    currentLocation={true}
                    currentLocationLabel="Current Location"
                    debounce={200}
                    style={styles.inputContainer}

                /> */}

                <View style={styles.resultsContainer}>
                    {this.state.results.map((location, idx) => {
                        return (
                            <SearchResult key={idx} description={location.description}/>
                        )
                    })}
                </View>

            </View>
        )
    }
}

// this.state.normalDrivers.map((driver, idx) => {
//     <Marker key={idx} title='test' coordinate={{ latitude: driver.locations[0].lat, longitude: driver.locations[0].lng }} />
// })

const mapStateToProps = ({ origin, destination, currentLocation }) => {
    return {
        origin,
        destination,
        currentLocation
    }
}

const mapDispatchToProps = dispatch => ({
    getGoogleLoc: () => dispatch(getGoogleLoc())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteSearch)