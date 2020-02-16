import React from 'react';
import Proptypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
  },
  innerContainer: {
    borderRadius: 10,
    width: 20,
    height: 20,
    margin: 3,
  },
});

const Checkbox = ({isChecked, handleChange}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isChecked
          ? {borderColor: '#40A8FB'}
          : {borderColor: 'rgb(221,221,221)'},
      ]}
      onPress={() => {
        handleChange(!isChecked);
      }}>
      <View
        style={[
          styles.innerContainer,
          isChecked
            ? {backgroundColor: '#40A8FB'}
            : {backgroundColor: 'rgb(221,221,221)'},
        ]}></View>
    </TouchableOpacity>
  );
};

Checkbox.propTypes = {
  isChecked: Proptypes.bool.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default Checkbox;
