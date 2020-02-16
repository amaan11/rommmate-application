import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomButton, Step, CustomTextInput} from '../../components';
import Checkbox from '../../components/Checkbox';

const styles = StyleSheet.create({
  backIcon: {
    margin: 15,
  },
  headingView: {
    margin: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  render() {
    const {isChecked} = this.state;
    return (
      <View>
        <TouchableOpacity onPress="">
          <Icon
            name="md-arrow-back"
            size={30}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headingView}>
          {/* <Text style={styles.heading}>Hi,</Text>
          <Text style={styles.heading}>Welcome Back</Text> */}
        </View>
        <View>
          <CustomTextInput />
        </View>
      </View>
    );
  }
}

export default Login;
