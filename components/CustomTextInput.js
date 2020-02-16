import React, {useState} from 'react';
import Proptypes from 'prop-types';
import {Text, TextInput, TouchableOpacity} from 'react-native';

const styles = {
  inputView: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'rgb(221,221,221)',
    borderRadius: 10,
  },
  input: {
    paddingTop: -10,
    paddingLeft: 10,
    fontSize: 20,
  },
  label: {
    fontSize: 15,
    paddingLeft: 10,
  },
};

const CustomTextInput = ({label, onChangeHandler, placeholder}) => {
  const [isFocussed, setFocusTextInput] = useState(false);
  return isFocussed ? (
    <TouchableOpacity style={styles.inputView} activeOpacity={1}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeHandler(text)}
        autoFocus={true}
      />
    </TouchableOpacity>
  ) : (
    <TextInput
      style={[styles.inputView, {fontSize: 20}]}
      placeholder={placeholder}
      onFocus={() => {
        setFocusTextInput(true);
      }}
    />
  );
};

CustomTextInput.propTypes = {
  label: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  onChangeHandler: Proptypes.func.isRequired,
};

export default CustomTextInput;
