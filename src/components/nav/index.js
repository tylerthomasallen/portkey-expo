import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';


class NavOptions extends React.Component {

    changeRoute = () => {
        const { navigate } = this.props.navigation;
        navigate('Route');
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.changeRoute()}>
                <Text>Change Route</Text>
            </TouchableHighlight>
        )
    }
}

export default withNavigation(NavOptions);