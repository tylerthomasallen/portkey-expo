import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, SafeAreaView} from 'react-navigation';
import HomeScreen from './home';
import RouteSearch from './route';
// import UserAuth from './auth';
import { Ionicons } from '@expo/vector-icons';


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Route: RouteSearch
  },
  {

    tabBarOptions: {
      activeTintColor: '#99BADD',
      labelStyle: {
        fontSize: 18,
      },
      style: {
        backgroundColor: 'white'
      },
      safeAreaInset: {
        bottom: 'never',
        top: 'never'
      }, 
      showIcon: true,

    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

const Index = () => {
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AppContainer />
    </SafeAreaView>
  )
}

export default Index;