import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Component Imports
import FindPlaces from '../screens/OnBoarding/FindPlaces';
import MatchPreferences from '../screens/OnBoarding/MatchPreferences';
import LikeMindedPeople from '../screens/OnBoarding/LikeMindedPeople';
import Login from '../screens/Auth/Login';
import CreateAccount from "../screens/Auth/CreateAccount"
import ForgetPassword from '../screens/Auth/ForgetPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
import ResetPasswordSuccessful from '../screens/Auth/ResetPasswordSuccessful';
import CreateProfile from '../screens/Profile/CreateProfile';
import CategorySelect from '../screens/Profile/CategorySelect';
import SetUserDetails from '../screens/Profile/SetUserDetails';
import VerificationCode from '../screens/Profile/VerificationCode';
import ApartmentQuestion from '../screens/Questions/ApartmentQuestion';
import GuestQuestion from '../screens/Questions/GuestQuestion';
import PetQuestion from '../screens/Questions/PetQuestion';
import SmokeQuestion from '../screens/Questions/SmokeQuestion';
// import InterestSelection from '../screens/Questions/InterestSelection';
// import RoomList from '../screens/Home/RoomList';
// import RoomDetails from '../screens/Home/RoomDetails';
import SetLocation from '../screens/LandLord/PostAd/SetLocation';
import PropertyDetails from '../screens/LandLord/PostAd/PropertyDetails';
import RoomDetails from '../screens/LandLord/PostAd/RoomDetails';
import AdSuccessful from '../screens/LandLord/PostAd/AdSuccessful';
import LandLordAdCurrentRoommate from '../screens/LandLord/PostAd/CurrentRoommate';
import AdDetails from '../screens/LandLord/PostAd/AdDetails';

const MainNavigator = createStackNavigator(
  {
    FindPlaces,
    MatchPreferences,
    LikeMindedPeople,
    Login,
    ForgetPassword,
    ResetPassword,
    ResetPasswordSuccessful,
    CreateProfile,
    CreateAccount,
    CategorySelect,
    SetUserDetails,
    VerificationCode,
    ApartmentQuestion,
    GuestQuestion,
    PetQuestion,
    SmokeQuestion,
    // InterestSelection,
    SetLocation,
    PropertyDetails,
    RoomDetails,
    AdSuccessful,
    LandLordAdCurrentRoommate,
    AdDetails
  },
  {
    initialRouteName: "AdDetails",
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(MainNavigator);

const Routes = ({ token }) => {
  // console.log("token>>", token)
  // token = token
  return (
    <AppContainer />
  )
}
export default Routes;
