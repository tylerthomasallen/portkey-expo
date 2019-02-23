import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Button, TextInput, StyleSheet, View } from 'react-native';

class SignUp extends Component {
  constructor(props) {
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    }
  }

  onChangeText = (field, value) => {
    this.setState({[field]: value})
  }

  signUp = async () => {
    try {
      const res = await Auth.signUp({
        
      })
    } catch(err) {
      console.log(err)
    }
  }
}

export default SignUp
