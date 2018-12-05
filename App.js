import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AppContainer from './src/components';


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <AppContainer />
      </Provider>
    );
  }
}