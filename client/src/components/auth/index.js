import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Button, TextInput, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
})

class UserAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authCode: ''
    }
  }

  onChangeText = (authCode) => { // 2
    this.setState({ authCode })
  }

  signUp = async () => {
    try {
      const res = await Auth.signUp({ // 3
        username: 'myCoolUsername',
        password: 'MyCoolP@ssword2!',
        attributes: {
          phone_number: '+18319178179',
          email: 'tylerthomasallen@gmail.com'
        }
      })
      debugger;
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }
  confirmUser = async () => { // 4
    const { authCode } = this.state
    try {
      const res = await Auth.confirmSignUp('myCoolUsername', authCode)
      console.log(res);
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Button title='Sign Up' onPress={this.signUp} />
        <TextInput
          placeholder='Input Code'
          onChangeText={value => this.onChangeText(value)}
          style={styles.input}
        />
        <Button
          title='Confirm User'
          onPress={this.confirmUser}
        />
    </View>
    )
  }
}

export default UserAuth;