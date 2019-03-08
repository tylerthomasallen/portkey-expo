import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Button, TextInput, View, Text } from 'react-native';
import styles from '../route/routes_styles';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      phone_number: '',
      authCode: ''
    }
  }

  onChangeText = (value, field) => {
    this.setState({[field]: value})
  }

  signUp = async () => {
    const { username, email, password, phone_number } = this.state;
    try {
      const res = await Auth.signUp({
        username, 
        password,
        attributes: {
          email,
          phone_number: `+1${phone_number}`
        }
      })
      console.log(res);
      debugger;
    } catch(err) {
      console.log(err)
    }
  }

  confirmUser = async () => {
    const { authCode, username } = this.state;
    try {
      const res = await Auth.confirmSignUp(username, authCode);
      console.log(res);
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <View style={`${styles.container} ${styles.authContainer}`}>

        <View style={styles.inputContainer}>
          <Text style={styles.searchButton}>Start</Text>
          <TextInput
            placeholder='Username'
            placeholderTextColor='black'
            onChangeText={value => this.onChangeText(value, 'username')}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.searchButton}>Start</Text>
          <TextInput
            placeholder='Email'
            placeholderTextColor='black'
            onChangeText={value => this.onChangeText(value, 'email')}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.searchButton}>Start</Text>
          <TextInput
            placeholder='Password'
            placeholderTextColor='black'
            onChangeText={value => this.onChangeText(value, 'password')}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.searchButton}>Start</Text>
          <TextInput
          placeholder='Phone Number'
          placeholderTextColor='black'
          onChangeText={value => this.onChangeText(value, 'phone_number')}
          style={styles.input}
          />
        </View>


        {/* <TextInput
          placeholder='Confirmation Code'
          placeholderTextColor='black'
          onChangeText={value => this.onChangeText(value, 'authCode')}
          style={styles.input}
        /> */}


        <Button title='Sign Up' onPress={this.signUp} />
        <Button
          title='Confirm User'
          onPress={this.confirmUser}
        />
    </View>
    )
  }
}

export default SignUp
