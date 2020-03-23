import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressBar, CustomButton } from '../../components';
import CustomStyle from '../../utils/styles'

const styles = StyleSheet.create({
  flexView: {
    display: 'flex',
    flexDirection: 'row',
  },
  backIcon: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 5,
  },
  stepText: {
    fontSize: 18,
    marginLeft: 100,
    marginTop: 15,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(150,150,150)',
  },
  text: {
    fontSize: 16
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    margin: 10
  },
  innerText: {
    color: '#404B69',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 7
  }
});

const CustomTextInput = props => {
  const { refHandler, onChangeTextHandler, onBackSpaceHandler } = props;
  return (
    <TextInput
      style={styles.input}
      numeric
      keyboardType="numeric"
      maxLength={1}
      ref={refHandler}
      onChangeText={text => onChangeTextHandler(text)}
      onKeyPress={({ nativeEvent }) => {
        if (nativeEvent && nativeEvent.key === 'Backspace') {
          onBackSpaceHandler();
        }
      }}
    />
  );
};

class VerificationCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: ""
    }
    this.input1 = ""
    this.input2 = ""
    this.input3 = ""
    this.input4 = ""
    this.input5 = ""
    this.input6 = ""
  }
  onChangeOtpHandler = (text, key) => {
    this.setState(
      {
        code: this.state.code + text
      },
      () => {
        if (text) {
          switch (key) {
            case "input1":
              if (this.state.code.toString().length == 1) {
                this.input2.focus();
              }
              break;
            case "input2":
              if (this.state.code.toString().length == 2) {
                this.input3.focus();
              }
              break;
            case "input3":
              if (this.state.code.toString().length == 3) {
                this.input4.focus();
              }
              break;
            case "input4":
              if (this.state.code.toString().length == 4) {
                this.input5.focus();
              }
              break;
            case "input5":
              if (this.state.code.toString().length == 5) {
                this.input6.focus();
              }
              break;
            case "input6":
              if (this.state.code.toString().length == 6) {
                Keyboard.dismiss();
              }
              break;
          }
        }
      }
    );
  };
  deleteCodeHandler = (type) => {
    switch (type) {
      case "input6":
        if (this.state.code.toString().length == 6) {
          this.setState({ code: this.state.code.toString().slice(0, -1) })
        }
        else {
          this.input5.focus()
        }
        break;
      case "input5":
        if (this.state.code.toString().length == 5) {
          this.setState({ code: this.state.code.toString().slice(0, -1) })
        }
        else {
          this.input4.focus()
        }
        break;
      case "input4":
        if (this.state.code.toString().length == 4) {
          this.setState({ code: this.state.code.toString().slice(0, -1) })
        }
        else {
          this.input3.focus()
        }
        break;
      case "input3":
        if (this.state.code.toString().length == 3) {
          this.setState({ code: this.state.code.toString().slice(0, -1) })
        }
        else {
          this.input2.focus()
        }
        break;
      case "input2":
        if (this.state.code.toString().length == 2) {
          this.setState({ code: this.state.code.toString().slice(0, -1) })
        }
        else {
          this.input1.focus()
        }
        break;
      case "input1":
        this.setState({ code: this.state.code.toString().slice(0, -1) }, () => {
          Keyboard.dismiss()
        })
        break;
    }
  }
  render() {
    const { code } = this.state
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.flexView}>
          <TouchableOpacity onPress={this.props.navigation.goBack()}>
            <Icon
              name="md-arrow-back"
              size={30}
              color="black"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.stepText}>Step 5-5</Text>
        </View>
        <ProgressBar percentage="100" />
        <View style={styles.container}>
          <Text style={styles.heading}>Verification Code</Text>
          <Text style={styles.text}>We texted you an access code.</Text>
          <Text style={styles.text}>Please enter it below.</Text>
          <View style={[CustomStyle.flex, { marginHorizontal: 20, marginTop: 25 }]}>
            <CustomTextInput
              refHandler={ref => {
                this.input1 = ref;
              }}
              onChangeTextHandler={text =>
                this.onChangeOtpHandler(text, "input1")
              }
              onBackSpaceHandler={() =>
                this.deleteCodeHandler("input1")
              } />
            <CustomTextInput refHandler={ref => {
              this.input2 = ref;
            }}
              onChangeTextHandler={text =>
                this.onChangeOtpHandler(text, "input2")
              }
              onBackSpaceHandler={() =>
                this.deleteCodeHandler("input2")
              } />
            <CustomTextInput refHandler={ref => {
              this.input3 = ref;
            }}
              onChangeTextHandler={text =>
                this.onChangeOtpHandler(text, "input3")
              }
              onBackSpaceHandler={() =>
                this.deleteCodeHandler("input3")
              } />
            <CustomTextInput refHandler={ref => {
              this.input4 = ref;
            }}
              onChangeTextHandler={text =>
                this.onChangeOtpHandler(text, "input4")
              }
              onBackSpaceHandler={() =>
                this.deleteCodeHandler("input4")
              } />
            <CustomTextInput refHandler={ref => {
              this.input5 = ref;
            }}
              onChangeTextHandler={text =>
                this.onChangeOtpHandler(text, "input5")
              }
              onBackSpaceHandler={() =>
                this.deleteCodeHandler("input5")
              } />
            <CustomTextInput refHandler={ref => {
              this.input6 = ref;
            }}
              onChangeTextHandler={text =>
                this.onChangeOtpHandler(text, "input6")
              }
              onBackSpaceHandler={() =>
                this.deleteCodeHandler("input6")
              } />
          </View>
          <Text style={styles.innerText}>This help us authenticate every user on Stacy,</Text>
          <Text style={styles.innerText}>for your peace of mind.</Text>
          <View style={[CustomStyle.flex, CustomStyle.justifyBetween, { marginTop: 50, }]}>
            <Text style={{ fontSize: 16, paddingTop: 1 }}>Didn't get a code?</Text>
            <TouchableOpacity>
              <Text style={{ color: '#40A8FB', paddingLeft: 5, fontSize: 16 }}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={CustomStyle.footer}>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="50">
            <CustomButton
              buttonText="DONE"
            // onPressHandler={this.handleSubmit}
            // disabled={!isEmailValid || !isPasswordValid}
            />
          </KeyboardAvoidingView>
        </View>
      </View >
    );
  }
}

export default VerificationCode;
