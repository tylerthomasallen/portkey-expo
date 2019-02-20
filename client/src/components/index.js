import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, SafeAreaView} from 'react-navigation';
import HomeScreen from './home';
import RouteSearch from './route';
import { Ionicons } from '@expo/vector-icons';


// const AppNavigator = createStackNavigator(
//   { Home: HomeScreen, Route: RouteSearch }, 
//   { initialRouteName: "Home" }
// );

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Route: RouteSearch,
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
        bottom: 'never'
      }, 
      showIcon: true,

    }
  }
);

  // {
  //   tabBarOptions: {
  //     activeTintColor: '#e91e63',
  //     labelStyle: {
  //       fontSize: 12,
  //     },
  //     style: {
  //       backgroundColor: 'white',
  //     },

  //     safeAreaInset: {
  //       bottom: 'never'
  //     }
  //   },

  //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //     const { routeName } = navigation.state;
  //     let iconName;
  //     if (routeName === 'Home') {
  //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //     } else if (routeName === 'Settings') {
  //       iconName = `ios-options${focused ? '' : '-outline'}`;
  //     }

  //     // You can return any component that you like here! We usually use an
  //     // icon component from react-native-vector-icons
  //     return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
  //   }

const AppContainer = createAppContainer(AppNavigator);

const Index = () => {
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AppContainer />
    </SafeAreaView>
  )
}

export default Index;