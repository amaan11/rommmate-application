import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { CustomButton, CustomTextInput } from '../../components';
import customStyle from "../../utils/styles"
import * as authActions from "../../redux/actions/auth"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  backIcon: {
    marginVertical: 15,
  },
  headingView: {
    marginTop: 20,
    marginBottom: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentText: {
    color: '#707070',
    paddingTop: 20,
    fontSize: 14,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});
class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCode: '',
      password: '',
      confirmPassword: '',
      isPasswordValid: false,
      isConfirmPasswordValid: false,
      loading: false
    };
  }
  handleChange = (type, value) => {
    const { password } = this.state;
    if (type === 'password') {
      if (password.length >= 8) {
        this.setState({ password: value, isPasswordValid: true });
      } else {
        this.setState({ password: value, isPasswordValid: false });
      }
    } else if (type === 'confirmPassword') {
      if (value === password) {
        this.setState({ confirmPassword: value, isConfirmPasswordValid: true });
      } else {
        this.setState({ confirmPassword: value, isConfirmPasswordValid: false });
      }
    } else {
      this.setState({ resetCode: value });
    }
  };
  handleSubmit = () => {
    const { resetCode, password, confirmPassword } = this.state

    const data = {
      resetCode,
      password,
      confirmPassword
    }
    this.setState({ loading: true })
    this.props.actions.resetPassword(data).then(() => {
      console.log("props>>", this.props.resetPasswordResponse)
    })
  }
  render() {
    const {
      resetCode,
      password,
      confirmPassword,
      isPasswordValid,
      isConfirmPasswordValid,
    } = this.state;
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" animating={loading} style={[customStyle.flex, customStyle.justifyBetween, customStyle.alignBetween]} />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon
            name="md-arrow-back"
            size={30}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headingView}>
          <Text style={styles.heading}>Reset Password?</Text>
          <Text style={styles.contentText}>
            Reset code was sent to your email.Please enter the code and create
            new password
          </Text>
        </View>
        <View>
          <CustomTextInput
            label="Reset Code"
            placeholder="Reset Code"
            onChangeHandler={value => this.handleChange('resetCode', value)}
            value={resetCode}
          />
          <CustomTextInput
            label="New Password"
            placeholder="New Password"
            onChangeHandler={value => this.handleChange('password', value)}
            value={password}
          />
          {password !== '' && !isPasswordValid && (
            <Text style={styles.errorText}>
              Password must be atleast 8 characters
            </Text>
          )}
          <CustomTextInput
            label="Confirm Password"
            placeholder="Confirm Password"
            onChangeHandler={value =>
              this.handleChange('confirmPassword', value)
            }
            value={confirmPassword}
          />
          {confirmPassword !== '' && !isConfirmPasswordValid && (
            <Text style={styles.errorText}>
              Confirm Password must match new password
            </Text>
          )}
        </View>
        <CustomButton
          buttonText="CHANGE PASSWORD"
          disabled={!isPasswordValid || !isConfirmPasswordValid || !resetCode}
          onPressHandler={this.handleSubmit}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    resetPasswordResponse: state.auth.resetPasswordResponse
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
