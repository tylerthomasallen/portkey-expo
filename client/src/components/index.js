import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home';
import RouteSearch from './route';

const AppNavigator = createStackNavigator({ Home: HomeScreen, Route: RouteSearch }, { initialRouteName: "Home" });


const AppContainer = createAppContainer(AppNavigator);

const Index = () => {
  return(
    <AppContainer />
  )
}

export default Index;