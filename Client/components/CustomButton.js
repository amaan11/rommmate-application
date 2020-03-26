import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    padding: 12,
  },
});
const CustomButton = ({
  buttonText,
  disabled,
  onPressHandler,
  activeOpacity,
}) => {
  console.log('disabled>>', disabled);
  return (
    <View>
      <LinearGradient
        colors={
          !disabled
            ? ['#266DF0', '#6C5BF5', '#8156F7', '#AB4BFA', '#B947FB']
            : ['#dddddd', '#dddddd']
        }
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.button}>
        <TouchableOpacity
          onPress={onPressHandler}
          activeOpacity={activeOpacity}>
          <Text style={styles.buttonText}>{buttonText}</Text>
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
