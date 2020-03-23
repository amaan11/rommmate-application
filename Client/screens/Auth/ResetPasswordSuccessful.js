import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RadialGradientView, Step} from '../../components';
import ProgressBar from '../../components/ProgressBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  radialView: {
    flex: 1,
    alignItems: 'center',
  },
  successfulHeading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
    fontFamily: 'Montserrat',
  },
  content: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  loginBtn: {
    width: 150,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 30,
    paddingTop: 10,
    paddingHorizontal: 35,
  },
});
class ResetPasswordSuccessful extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#40A8FB', '#6C5BF5', '#8156F7', '#B947FB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{flex: 1}}>
          <View style={styles.radialView}>
            <RadialGradientView />
          </View>
          <View style={styles.contentView}>
            <Text style={styles.successfulHeading}>Successful!</Text>
            <Text style={styles.content}>
              You have successfully change your password.
            </Text>
            <Text style={styles.content}>
              Please use your new password for logging
            </Text>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}
              activeOpacity={1}>
              <Text>LOGIN NOW</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default ResetPasswordSuccessful;
