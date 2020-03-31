import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Text, TextInput, TouchableOpacity } from 'react-native';

const styles = {
  inputView: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'rgb(221,221,221)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    paddingTop: -10,
    fontSize: 16,
  },
  label: {
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 5,
    color: '#707070',
  },
};

const CustomTextInput = ({
  label,
  onChangeHandler,
  placeholder,
  type,
  value,
  isEditable,
  isNumeric
}) => {
  const [isFocussed, setFocusTextInput] = useState(false);

  return isFocussed || !isEditable ? (
    <TouchableOpacity style={styles.inputView} activeOpacity={1}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeHandler(text)}
        autoFocus={true}
        secureTextEntry={type === 'password' ? true : false}
        value={value}
        editable={isEditable}
        keyboardType={isNumeric ? 'numeric' : 'default'}
      />
    </TouchableOpacity>
  ) : (
      <TextInput
        style={[styles.inputView, { fontSize: 20 }]}
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
  value: Proptypes.string,
  isEditable: Proptypes.bool,
  isNumeric: Proptypes.bool
};
CustomTextInput.defaultProps = {
  isEditable: true,
  isNumeric: false
};

export default CustomTextInput;
