import React from 'react'
import { Dimensions } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

const GestureHandlerConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};
const genders = ['Male', 'Female', 'Others'];

const Categories = [
  {
    title: 'Room',
    icon: <MaterialCommunityIcon name="home-account" size={55} color="white" />,
    colors: ['#855AEF', '#7A50E2'],
  },
  {
    title: 'Entire Place',
    icon: <AntDesignIcon name="home" size={50} color="white" />,
    colors: ['#D8FF9D', '#A4E67B', '#70CD58', '#47BA3D'],
  },
  {
    title: 'Roommate',
    icon: <EntypoIcon name="users" size={50} color="white" />,
    colors: ['#00FF80', '#00EC92', '#00C7B4', '#009BDC', '#0076FF'],
  },
  {
    title: 'Tenant',
    icon: (
      <MaterialCommunityIcon name="home-lock-open" size={50} color="white" />
    ),
    colors: ['#FF9203', '#FF8413', '#FF5E3A'],
  },
];
const userTypes = ["Roommate", "Landlord", "Agent"]
const propertyTypes = ["Apartment", "House", "Studio"]
const bedRoomTypes = [
  {
    icon: <Ionicons name="ios-bed" size={30} color="black" />,
    text: 'Double Bed'
  },
  {
    icon: <FontAwesome name="bed" size={30} color="black" />,
    text: 'Single Bed'
  },
]
const roomType = ["Single", "Double", "Shared"]
const genderWithIcon = [
  {
    icon: <FontAwesome name="male" size={30} color="black" />,
    type: 'Male'
  }, {
    icon: <FontAwesome name="female" size={30} color="black" />,
    type: 'Female'
  }
]
const occupations = [
  {
    icon: <MaterialIcons name="work" size={30} color="black" />,
    type: 'Professionals'
  },
  {
    icon: <MaterialIcons name="school" size={30} color="black" />,
    type: 'Students'
  },
]

export { DEVICE_WIDTH, DEVICE_HEIGHT, GestureHandlerConfig, genders, Categories, userTypes, propertyTypes, bedRoomTypes, roomType, genderWithIcon, occupations };
