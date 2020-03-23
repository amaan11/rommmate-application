import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

})

class PlaceSelect extends Component {
  render() {
    return <View>
      <View style={styles.flexView}>
        <TouchableOpacity onPress={this.props.navigation.goBack()}>
          <Icon
            name="md-arrow-back"
            size={30}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.stepText}>Step 4-5</Text>
      </View>
    </View>;
  }
}

export default PlaceSelect;
