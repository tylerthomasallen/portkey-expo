import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import styles from './home_search_styles';


class HomeSearch extends React.Component {
  handlePress = () => {
    const { navigate } = this.props.navigation; 
    navigate('Route');
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Text style={styles.greeting}> Hey partner,</Text>
          <Text style={styles.title}>Where are you going?</Text>
          <TouchableHighlight onPress={this.handlePress} underlayColor='white'>
            <View style={styles.inputContainer}>
              <Ionicons name="ios-search" style={styles.searchButton}/>
              <TextInput style={styles.input} placeholder="Search destination" placeholderTextColor= 'black' pointerEvents="none" />  
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
export default withNavigation(HomeSearch)

{/* <TouchableHighlight style={styles.touchable} onPress={() => this.onPress()}>    
      <View style={styles.addressContainer}>
          <View style={styles.starContainer}>
              <Ionicons name="ios-star" style={styles.star}/>
          </View>
          <View styles={styles.address}>
              <Text style={styles.addressTitle}>Ginnas Place</Text>
              <Text style={styles.streetAddress}>2268 Jackson St, San Francisco</Text>
          </View>
      </View>
  </TouchableHighlight>

  <TouchableHighlight style={styles.touchable} onPress={() => this.onPress()}>    
      <View style={styles.addressContainer}>
          <View style={styles.starContainer}>
              <Ionicons name="ios-star" style={styles.star} />
          </View>
          <View styles={styles.address}>
              <Text style={styles.addressTitle}>Tyler's Place</Text>
              <Text style={styles.streetAddress}>2713 Folsom St, San Francisco</Text>
          </View>
      </View>
  </TouchableHighlight> */}

// const mapStateToProps = ({ currentLocation, authToken }) => {
//     return {
//         currentLocation,
//         authToken
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     getGoogleLoc: () => dispatch(getGoogleLoc()),
//     setOrigin: (location) => dispatch(setOrigin(location)),
//     setDestination: (location) => dispatch(setDestination(location)),
//     getLyftCost: (tripData) => dispatch(getLyftCost(tripData))
// });

// export default withNavigation(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HomeSearch))
