import React from 'react';
import Proptypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderWidth: 1,
    borderColor: 'rgb(221,221,221)',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // marginVertical: 20,
  },
  label: {
    fontSize: 15,
    padding: 5,
    color: '#707070',
  },
  dateText: {
    fontSize: 16,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  icon: {
    paddingTop: 18,
  },
});

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isVisible: false,
      dateSelected: false,
    };
  }
  onDateChangeHandler = (event, selectedDate) => {
    this.setState(
      {
        isVisible: false,
        date: selectedDate,
        dateSelected: true,
      },
      () => {
        this.props.onDateChange(this.state.date);
      },
    );
  };

  render() {
    const { label } = this.props;
    const { date, isVisible, dateSelected } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>{label}</Text>
          {date !== '' && dateSelected && (
            <Text style={styles.dateText}>
              {moment(date).format('MMM DD, YYYY')}
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
          <Icon
            name="date-range"
            size={30}
            color="#40A8FB"
            style={styles.icon}
          />
        </TouchableOpacity>
        {isVisible && (
          <DateTimePicker
            testID="datePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={this.onDateChangeHandler}
          />
        )}
      </View>
    );
  }
}

DatePicker.propTypes = {
  label: Proptypes.string.isRequired,
  onDateChange: Proptypes.func.isRequired,
};

export default DatePicker;
