import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AppContainer from './src/components';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);


const App = () => {
  return(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;