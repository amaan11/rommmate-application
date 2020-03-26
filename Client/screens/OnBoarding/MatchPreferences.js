import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Step, CustomButton } from '../../components';
import { GestureHandlerConfig } from '../../utils/data';

const image = require('../../assets/match_preferance.jpg');
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
class MatchPreferences extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <GestureRecognizer
        config={GestureHandlerConfig}
        onSwipeLeft={() => {
          navigate('LikeMindedPeople');
        }}
        onSwipeRight={() => {
          navigate('FindPlaces');
        }}
        style={styles.container}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.contentView}>
            <Text style={styles.heading}>Match Your Preferences</Text>
            <Text style={styles.content}>
              Tell us your preferences and match with the right people.
            </Text>
            <Step noOfSteps="3" isActive="2" />
          </View>
          <View style={styles.footer}>
            <CustomButton
              buttonText="GET STARTED"
              onPressHandler={() => {
                navigate('CreateAccount');
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

export default MatchPreferences;
