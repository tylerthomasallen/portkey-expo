import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';

import Splash from './src/components/splash';

export default class HelloWorldApp extends Component {
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