import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {Step, CustomButton} from '../../components';
import {GestureHandlerConfig} from '../../utils/data';

const image = require('../../assets/like-minded-people.jpeg');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 420,
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#404B69',
    paddingBottom: 30,
  },
  footer: {
    flex: 1,
    marginHorizontal: 30,
  },
  loginBtn: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 18,
    color: '#404B69',
  },
});
class LikeMindedPeople extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <GestureRecognizer
        config={GestureHandlerConfig}
        onSwipeLeft={() => {
          navigate('Login');
        }}
        onSwipeRight={() => {
          navigate('MatchPreferences');
        }}
        style={styles.container}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.contentView}>
            <Text style={styles.heading}>Like Minded People</Text>
            <Text style={styles.content}>
              Live together with people who will inspire like you.
            </Text>
            <Step noOfSteps="3" isActive="3" />
          </View>
          <View style={styles.footer}>
            <CustomButton
              buttonText="GET STARTED"
              onPressHandler={() => {
                navigate('Signup');
              }}
            />
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                navigate('Login');
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </GestureRecognizer>
    );
  }
}

export default LikeMindedPeople;
