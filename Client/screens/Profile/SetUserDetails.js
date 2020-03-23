import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Slider} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {ProgressBar} from '../../components';
import {CustomButton, DatePicker} from '../../components';

const styles = StyleSheet.create({
  flexView: {
    display: 'flex',
    flexDirection: 'row',
  },
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
    marginTop: 40,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 24,
    color: '#40A8FB',
    fontWeight: 'bold',
  },
  flexView: {
    display: 'flex',
    flexDirection: 'row',
  },
  rupeeIcon: {
    marginRight: 5,
  },
  datePickerView: {
    marginTop: 50,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
class SetUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxRent: 0,
      moveInDate: '',
    };
  }
  onRangeChangeHandler = value => {
    this.setState({maxRent: value * 200000});
    console.log('value>>>', value);
  };
  onSelectDateHandler = selectedDate => {
    this.setState({moveInDate: selectedDate});
  };
  render() {
    const {maxRent, moveInDate} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.flexView}>
          <TouchableOpacity onPress={this.props.navigation.goBack()}>
            <Icon
              name="md-arrow-back"
              size={30}
              color="black"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.stepText}>Step 3-5</Text>
        </View>
        <ProgressBar percentage={60} />
        <View style={styles.container}>
          <Text style={styles.heading}>What is your</Text>
          <Text style={styles.heading}>maximum rent?</Text>
          <View style={[styles.flexView, {marginTop: 15}]}>
            <Text style={styles.amountText}>Rs.{maxRent}</Text>
            <Text style={{padding: 8}}>per month</Text>
          </View>
          <Slider
            thumbTintColor="white"
            minimumTrackTintColor="#40A8FB"
            style={{transform: [{scaleX: 1.09}, {scaleY: 1.5}], marginTop: 20}}
            onValueChange={this.onRangeChangeHandler}
          />
          <View
            style={[
              styles.flexView,
              {justifyContent: 'space-between', marginTop: 10},
            ]}>
            <View style={styles.flexView}>
              <FontAwesomeIcon
                name="rupee"
                size={20}
                style={styles.rupeeIcon}
              />
              <Text>0</Text>
            </View>
            <View style={styles.flexView}>
              <FontAwesomeIcon
                name="rupee"
                size={20}
                style={styles.rupeeIcon}
              />
              <Text>3,00,000</Text>
            </View>
          </View>
          <View style={styles.datePickerView}>
            <Text style={styles.heading}>When is your</Text>
            <Text style={styles.heading}>move-in date?</Text>
            <View style={{marginTop: 15}}>
              <DatePicker
                label="Move-in date"
                onDateChange={this.onSelectDateHandler}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonText="NEXT"
            disabled={maxRent === 0 || !moveInDate}
          />
        </View>
      </View>
    );
  }
}

export default SetUserDetails;
