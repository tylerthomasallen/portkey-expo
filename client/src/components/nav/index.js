import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#ff00bf',
    fontWeight: 'bold'
  }
})

class NavOptions extends React.Component {
  changeRoute = () => {
    const { navigate } = this.props.navigation;
    navigate('Route');
  }

  render() {
    const { origin, destination } = this.props;
    if (origin.lat !== undefined && destination.lat !== undefined) {
      return (
        <TouchableHighlight onPress={this.changeRoute} underlayColor="white">
          <Text style={styles.title}>Change Route</Text>
        </TouchableHighlight>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ origin, destination }) => {
  return {
    origin,
    destination
  }
}

export default withNavigation(connect(
    mapStateToProps
)(NavOptions))