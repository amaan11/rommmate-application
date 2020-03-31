import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Step, CustomButton } from '../../components';
import { GestureHandlerConfig } from '../../utils/data';
import { CustomStyle } from '../../utils'

const image = require('../../assets/find-roommate.png');
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
    marginTop: 20,
  },
  loginText: {
    fontSize: 18,
    color: '#404B69',
  },
});
class FindPlaces extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <GestureRecognizer
        config={GestureHandlerConfig}
        onSwipeLeft={() => {
          navigate('MatchPreferences');
        }}
        style={styles.container}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={[CustomStyle.alignCenter, styles.contentView]}>
            <Text style={styles.heading}>Find Places to Live</Text>
            <Text style={styles.content}>
              Find great verfified places & people to share a room with.
            </Text>
            <Step noOfSteps="3" isActive="1" />
          </View>
          <View style={styles.footer}>
            <CustomButton
              buttonText="GET STARTED"
              onPressHandler={() => {
                navigate('CreateAccount');
              }}
            />
            <TouchableOpacity
              style={[CustomStyle.alignCenter, styles.loginBtn]}
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

export default FindPlaces;
