import React from 'react';
import Proptypes from 'prop-types'
import { View } from 'react-native';

const RadialGradientView = ({ isImageRequired, image }) => (
  <View
    style={{
      width: 340,
      height: 340,
      borderRadius: 170,
      backgroundColor: '#267AED',
      zIndex: 1,
    }}>
    <View
      style={{
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#2B69D9',
        zIndex: -1,
        margin: 45,
      }}>
      <View
        style={{
          width: 180,
          height: 180,
          borderRadius: 90,
          backgroundColor: '#2F4AA8',
          zIndex: -1,
          margin: 30,
        }}>
        {isImageRequired ?
          image
          : <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: 'white',
              zIndex: -1,
              margin: 30,
            }}></View>}
      </View>
    </View>
  </View>
);
RadialGradientView.propTyeps = {
  image: Proptypes.element
}
RadialGradientView.defaultProps = {
  isImageRequired: false,

}

export default RadialGradientView;
