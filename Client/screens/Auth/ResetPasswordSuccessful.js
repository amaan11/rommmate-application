import React, { Component } from 'react';
import { SuccessView } from '../../components';

class ResetPasswordSuccessful extends Component {
  render() {
    return (
      <SuccessView
        title="Successful!"
        content="You have successfully change password.Please use your new password for logging"
        buttonText="LOGIN NOW"
        onPressHandler={() => {
          this.props.navigation.navigate('Login');
        }}
      />
    );
  }
}

export default ResetPasswordSuccessful;
