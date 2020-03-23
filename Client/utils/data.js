import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const GestureHandlerConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};
const genders = ['Male', 'Female', 'Others'];


const questionsWithOptions = [
  {
    question: 'How often do you clean your apartment?',
    options: [
      `I don't things clean`, 'Once a month', 'Once a week', 'Every few days'
    ]
  },
  {
    question: 'Do you smoke?',
    options: [
      'Yes', 'No'
    ]
  },
  {
    question: 'How do you feel about pets?',
    options: [
      'No pets please', 'Depend on the pet', `No pets myself,but I don't mind living with them`, 'I live with pet of my own!'
    ]
  },
  {
    question: 'How about guests?',
    options: [
      'No guests,please!', 'Only during the day', 'No problem!'
    ]
  },
  {
    question: 'What are you interested in?',
    options: [
      'Foodie', 'Gym & Sport', 'Party', 'Bookworm', 'Night owl', 'Healthy', 'Travel', 'Culture', 'History'
    ]
  }
]
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
export { GestureHandlerConfig, genders, questionsWithOptions, Categories };
