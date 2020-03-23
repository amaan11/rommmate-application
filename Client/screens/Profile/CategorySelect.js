import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressBar, CategoryType, CustomButton } from '../../components';
import { Categories } from '../../utils/data'
import CustomStyle from '../../utils/styles'

const styles = {
  backIcon: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 5,
  },
  stepText: {
    fontSize: 18,
    marginLeft: 100,
    marginTop: 15,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 34,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  categoryView: {
    flexWrap: 'wrap',
    marginTop: 50,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 20,
  },
};

class CategorySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
    };
  }
  onSelectCategoryHandler = value => {
    this.setState({ selectedCategory: value });
  };
  onSubmitHandler = () => {
    const { selectedCategory } = this.state

  }
  render() {
    const { selectedCategory } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={CustomStyle.flex}>
          <TouchableOpacity onPress={this.props.navigation.goBack()}>
            <Icon
              name="md-arrow-back"
              size={30}
              color="black"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.stepText}>Step 1-5</Text>
        </View>
        <ProgressBar percentage="20" />
        <View style={styles.container}>
          <Text style={styles.heading}>What are you</Text>
          <Text style={styles.heading}>looking for?</Text>
          <View style={[sutomStyle.flex, styles.categoryView]}>
            {Categories.map((category, index) => (
              <CategoryType
                title={category.title}
                icon={category.icon}
                colors={category.colors}
                isMargin={index % 2 === 0}
                onSelectCategory={this.onSelectCategoryHandler}
                isSelected={selectedCategory === category.title}
              />
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <CustomButton disabled={!selectedCategory}
            buttonText="NEXT"
            onPressHandler={this.onSubmitHandler}
          />
        </View>
      </View>
    );
  }
}

export default CategorySelect;
