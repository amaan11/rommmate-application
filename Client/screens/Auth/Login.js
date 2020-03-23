import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import LocalAuth from "react-native-local-auth;
import FlashMessage, { showMessage } from "react-native-flash-message";
import { CustomTextInput, CustomButton, Loader } from '../../components';
import * as authActions from "../../redux/actions/auth"
import CustomStyle from "../../utils/styles"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  headingView: {
    marginTop: 20,
    marginBottom: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  forgetText: {
    textAlign: 'right',
    fontSize: 14,
  },
  footerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: '#40A8FB',
    paddingLeft: 10,
    fontSize: 18,
  },
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
      loading: false
    };
  }
  handleChange = (type, value) => {
    if (type === 'email') {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (regex.test(value)) {
        this.setState({ email: value, isEmailValid: true });
      } else {
        this.setState({ email: value, isEmailValid: false });
      }
    } else {
      if (value.length >= 8) {
        this.setState({ password: value, isPasswordValid: true });
      } else {
        this.setState({ password: value, isPasswordValid: false });
      }
    }
  };
  handleSubmit = () => {
    Keyboard.dismiss()
    const { email, password } = this.state;
    const data = {
      email,
      password,
    }
    this.setState({ loading: true }, () => {
      this.props.actions.authenticateUser(data).then(() => {
        if (this.props.user && this.props.user.error) {
          this.setState({ loading: false }, () => {
            showMessage({
              message: this.props.user.error.message ? this.props.user.error.message : 'Error in Login!Try Again',
              type: "danger",
              hideOnPress: false,
              autoHide: true,
              style: { height: 1, width: '90%' }
            })
          })
        }
        else {
          this.setState({ loading: false }, () => {
            showMessage({
              message: 'Login Successful!',
              type: "success",
            });
            this.props.navigation.navigate("CategorySelect")
          })
        }
      })
    })
  };
  // touchAuthenticationHandler = () => {
  //   LocalAuth.authenticate({
  //     reason: 'Authenticate Using Fingerprint or Phone Password! ',
  //     fallbackToPasscode: true,
  //     suppressEnterPassword: true
  //   })
  //     .then(success => {
  //       if (success) {
  //         // this.props
  //       }
  //     })
  //     .catch(error => {
  //       showMessage({
  //         message: 'Touch Authentication Failed!',
  //         type: "danger",
  //         hideOnPress: false,
  //         autoHide: true,
  //         style: { height: 1, width: '90%', marginBottom: 150 }
  //       })
  //     })
  // }
  render() {
    const { isEmailValid, isPasswordValid, email, password, loading } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Loader isVisible={loading} />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon
            name="md-arrow-back"
            size={30}
            color="black"
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>
        <View style={styles.headingView}>
          <Text style={styles.heading}>Hi,</Text>
          <Text style={styles.heading}>Welcome Back</Text>
        </View>
        <View>
          <CustomTextInput
            label="Email"
            placeholder="Email"
            onChangeHandler={value => this.handleChange('email', value)}
            value={email}
          />
          {email !== '' && !isEmailValid && (
            <Text style={CustomStyle.errorMessage}>Please enter a valid email</Text>
          )}

          <CustomTextInput
            label="Password"
            placeholder="Password"
            onChangeHandler={value => this.handleChange('password', value)}
            value={password}
          />
          {password !== '' && !isPasswordValid && (
            <Text style={CustomStyle.errorMessage}>
              Password must be atleast 8 characters
            </Text>
          )}
          <TouchableOpacity onPress={() => navigate('ForgetPassword')}>
            <Text style={[styles.forgetText, CustomStyle.primaryColor]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Using Touch */}

        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
          <View style={[CustomStyle.flex]}>
            <Text style={[CustomStyle.dangerColor, { paddingRight: 5, paddingBottom: 10 }]}>NEW!</Text>
            <Text>Quick Login Using TouchID</Text>
          </View>
          <TouchableOpacity onPress={this.touchAuthenticationHandler} activeOpacity="0.2">
            <MaterialIcons
              name="touch-app"
              size={30}
              color="#40A8FB"
            />
          </TouchableOpacity>
        </View> */}
        <View style={CustomStyle.footer}>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="30">
            <CustomButton
              buttonText="Login"
              onPressHandler={
                this.handleSubmit
              }
              disabled={!isEmailValid || !isPasswordValid}
            />

            <View style={styles.footerView}>
              <Text style={{ paddingTop: 2, fontSize: 16 }}>
                Don't Have Account
              </Text>
              <TouchableOpacity onPress={() => navigate('Signup')}>
                <Text style={styles.signUpText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <FlashMessage position="center" floating={true} icon="danger" />
        </View>
      </View >

    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
