import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/home'
import RouteSearch from './src/components/route';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Route: RouteSearch
},
  {
    initialRouteName: "Home"
  }

);

const AppContainer = createAppContainer(AppNavigator);

export default class Index extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}


// import React, { Component } from 'react';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { SafeAreaView, View } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './src/store/store';
// import { Location, Permissions } from 'expo';
// import Index from './src/components';
// import HomeScreen from './src/components/home';
// import RouteSearch from './src/components/route';

// const deltas = {
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// }

// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Route: RouteSearch
// },
// {
//   initialRouteName: "Home"
// }

// );

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       region: null
//     }
//   }
  
//   componentWillMount() {
//     this.getLocationAsync();
//   }

//   getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({errorMessage: 'Location mission access denied'})
//     }

//     const location = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = location.coords;
//     const region = {
//       latitude,
//       longitude,
//       ...deltas
//     };

//     await this.setState( {region} )
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <View style={{flex: 1}}>
//           <AppContainer />
//         </View>
//       </Provider>
//     );
//   }
// }