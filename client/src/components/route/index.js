import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import SearchResult from './search_result';
import { googlePlaces } from '../../api/google';
import { withNavigation } from 'react-navigation';
import { getLyftCost } from '../../actions/lyft';
import { setOrigin, setDestination } from '../../actions/route';
import { getLatLng } from '../../api/google';
import { Ionicons } from '@expo/vector-icons';
import styles from './routes_styles';

class RouteSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Where are you going?',
      localOrigin: '',
      localDestination: '',
      results: []
    }
  }

  handleInput = async (text, type) => {
    const { currentLocation } = this.props;
    this.setState({[type]: text})

    if (text.length >= 2) {
      const googleResponse = await googlePlaces(text, currentLocation)
      this.setState({results: googleResponse})
    }

    if (text.length <= 1) {
      this.setState({results: []})
    }
  }

  currentLocation = () => {
    const { title, localOrigin } = this.state;

    if (title === 'Pickup' && localOrigin !== 'Current Location') {
      return (
        <TouchableHighlight onPress={() => this.handleCurrentLocation()}>
          <View style={styles.currentLocation}>
            <Ionicons style={styles.clIcon} name="ios-locate" />
            <Text style={styles.clTitle}>Current Location</Text>
          </View>
        </TouchableHighlight>
      )
    }
  }

  handleCurrentLocation = async () => {
    const { currentLocation, setOrigin } = this.props;
    const { navigate } = this.props.navigation; 

    await this.setState({localOrigin: 'Current Location', results: []})
    await setOrigin({address: 'Current Location', lat: currentLocation.latitude, lng: currentLocation.longitude})

    if (this.state.localOrigin.length >= 1 && this.state.localDestination.length >= 1) {
      navigate('Home')
    }
  }

  async componentDidMount () {
    this.destinationInput._onPress();
    const { currentLocation, setOrigin } = this.props;

    if (currentLocation.latitude !== undefined) {
      await this.setState({localOrigin: 'Current Location'})
      await setOrigin({ address: 'Current Location', lat: currentLocation.latitude, lng: currentLocation.longitude })
    }
  }

  handlePress = async (location) => {
    const { setOrigin, setDestination } = this.props;
    const { navigate } = this.props.navigation; 

    if (this.state.title === 'Pickup') {
      await this.setState({ localOrigin: location, results: [] })
      const originCoords = await getLatLng(location);
      await setOrigin({address: location, ...originCoords})
    } else {
      await this.setState({ localDestination: location, results: [] })
      const desCoords = await getLatLng(location);
      await setDestination({address: location, ...desCoords})
    }

    if (this.state.localOrigin.length >= 1 && this.state.localDestination.length >= 1) {
      navigate('Home')
    }
  }

  render() {
    return (
      <View style={styles.container}>
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
                onChangeText={(text) => this.handleInput(text, 'localOrigin')}
                onTouchStart={() => this.setState({title: 'Pickup', results: [], localOrigin: ''})}
                value={this.state.localOrigin}>
            </TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.searchButton}>End</Text>
            <TextInput
                style={styles.input}
                placeholder="Search destination"
                placeholderTextColor='black'
                onChangeText={(text) => this.handleInput(text, 'localDestination')}
                onTouchStart={() => this.setState({ title: 'Dropoff', results: [], localDestination: ''})}
                value={this.state.localDestination}
                ref={(destinationInput) => this.destinationInput = destinationInput}>
            </TextInput>
          </View>
      </View>

      <View style={styles.resultsContainer}>
        {this.currentLocation()}
        {this.state.results.map((location, idx) => {
          return (
            <TouchableHighlight key={idx + 1} onPress={() => this.handlePress(location.description)}>
              <SearchResult key={idx} description={location.description}/>
            </TouchableHighlight>
            )
        })}
        </View>
      </View>
    )
  }
}


const mapStateToProps = ({ origin, destination, currentLocation, authToken }) => {
  return {
    origin,
    destination,
    currentLocation,
    authToken
  }
}

const mapDispatchToProps = dispatch => ({
  getGoogleLoc: () => dispatch(getGoogleLoc()),
  setOrigin: (location) => dispatch(setOrigin(location)),
  setDestination: (location) => dispatch(setDestination(location)),
  getLyftCost: (tripData) => dispatch(getLyftCost(tripData))
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteSearch))