import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

const ProgressBar = ({percentage}) => (
  <View
    style={{
      height: 2,
      width: '100%',
      borderColor: 'rgb(221, 221, 221)',
      borderWidth: 1,
    }}>
    <View
      style={{
        width: `${percentage}%`,
        backgroundColor: '#40A8FB',
        height: 2,
      }}></View>
  </View>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
