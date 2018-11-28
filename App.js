import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { Location, Permissions } from 'expo';

import Splash from './src/components/splash';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: null
    }
  }
  
  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({errorMessage: 'Location mission access denied'})
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const region = {
      latitude,
      longitude,
      ...deltas
    };
    debugger;

    await this.setState( {region} )
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Splash />
        </View>
      </Provider>
    );
  }
}