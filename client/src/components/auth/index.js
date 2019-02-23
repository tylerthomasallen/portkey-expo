import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import SignUp from './signup';

class UserAuth extends Component {
  render() {
    return(
      <SignUp />
    )
  }
}

export default UserAuth;