import React from 'react';
import Proptypes from 'prop-types';
import { map } from 'lodash';
import { View } from 'react-native';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  innerView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#40A8FB',
    margin: 5,
  },
};
const Step = ({ noOfSteps, isActive }) => {
  const array = [...Array(parseInt(noOfSteps)).keys()];

  return (
    <View style={styles.container}>
      {array &&
        array.length > 0 &&
        map(array, currentStep => (
          <View
            style={[
              currentStep === isActive - 1 && { backgroundColor: '#40A8FB' },
              styles.innerView,
            ]}></View>
        ))}
    </View>
  );
};

Step.propTypes = {
  noOfSteps: Proptypes.number.isRequired,
  isActive: Proptypes.number.isRequired,
};
Step.defaultProps = {
  noOfSteps: 1,
  isActive: 1,
};
export default Step;
