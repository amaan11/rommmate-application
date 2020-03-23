import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = {
  container: {
    width: '47%',
    height: 150,
    marginBottom: 20,
    borderRadius: 15,
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    paddingTop: 15,
    fontWeight: 'bold',
  },
};
const CategoryType = ({
  colors,
  icon,
  title,
  isMargin,
  onSelectCategory,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isMargin && {marginRight: 20},
        isSelected && {borderWidth: 2.5, borderColor: '#40A8FB'},
      ]}
      activeOpacity={1}
      onPress={() => onSelectCategory(title)}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1, borderRadius: 10}}>
        <View style={styles.contentView}>
          {icon}
          <Text style={styles.text}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default CategoryType;
