import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  button: {
    height: 50,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
});
const CustomButton = ({
  buttonText,
  disabled,
  onPressHandler,
  activeOpacity,
}) => {
  return (
    <View>
      <LinearGradient
        colors={!disabled ? ['#0F73EE', '#8A54F8'] : ['#f1f1f1', '#dddddd']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.button}>
        <TouchableOpacity
          onPress={onPressHandler}
          activeOpacity={activeOpacity}>
          <Text style={styles.buttonText}>Label</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPressHandler: PropTypes.func.isRequired,
  activeOpacity: PropTypes.number.isRequired,
};

export default CustomButton;
