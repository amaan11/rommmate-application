import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
export { GestureHandlerConfig, genders, Categories };
