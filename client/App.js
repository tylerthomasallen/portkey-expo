import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AppContainer from './src/components';


export default class App extends Component {

  test() {
    fetch('http://172.68.132.93:5000/test')
    .then(res => {
      console.log(res);
      debugger;
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <Provider store={store}>
          <AppContainer />
      </Provider>
    );
  }
}