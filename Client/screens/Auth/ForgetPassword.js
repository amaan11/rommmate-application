import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { CustomButton, CustomTextInput, Loader } from '../../components';
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
    marginBottom: 50,
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
});
class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: false,
      loading: false
    };
  }
  handleChange = value => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(value)) {
      this.setState({ email: value, isEmailValid: true });
    } else {
      this.setState({ email: value, isEmailValid: false });
    }
  };
  handleSubmit = () => {
    Keyboard.dismiss()
    const { email } = this.state;
    this.setState({ loading: true })
    this.props.actions.sendEmail({ email }).then(() => {
      console.log("emailL", this.props.sendEmailResponse)
      if (this.props.sendEmailResponse && this.props.sendEmailResponse.error) {
        console.log("emailL", this.props.sendEmailResponse)

        this.setState({ loading: false }, () => {
          showMessage({
            message: this.props.sendEmailResponse.error.message ? this.props.sendEmailResponse.error.message : 'Email cannot be sent!',
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
            message: 'Email has been sent successfully!',
            type: "success",
          });
          this.props.navigation.navigate("CategorySelect")
        })
      }
    })
  };
  render() {
    const { email, isEmailValid, loading } = this.state;
    return (
      <View style={styles.container}>
        <Loader isVisible={loading} />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon
            name="md-arrow-back"
            size={30}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headingView}>
          <Text style={styles.heading}>Forgot Password?</Text>
          <Text style={styles.contentText}>
            Please enter your registered email to receive your password reset
            instructions
          </Text>
        </View>
        <FlashMessage position="center" floating={true} icon="danger" />
        <View>
          <CustomTextInput
            label="Email"
            placeholder="Email"
            onChangeHandler={this.handleChange}
            value={email}
          />
        </View>
        <CustomButton
          buttonText="SEND REQUEST"
          disabled={!isEmailValid}
          onPressHandler={this.handleSubmit}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    sendEmailResponse: state.auth.sendEmailResponse
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);

