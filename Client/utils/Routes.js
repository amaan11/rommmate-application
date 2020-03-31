import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Component Imports

// -----------------OnBoarding ----------------//
import FindPlaces from '../screens/OnBoarding/FindPlaces';
import MatchPreferences from '../screens/OnBoarding/MatchPreferences';
import LikeMindedPeople from '../screens/OnBoarding/LikeMindedPeople';

// -----------------Auth ---------------------//
import Login from '../screens/Auth/Login';
import CreateAccount from "../screens/Auth/CreateAccount"
import ForgetPassword from '../screens/Auth/ForgetPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
import ResetPasswordSuccessful from '../screens/Auth/ResetPasswordSuccessful';

// ----------------CreateProfile --------------//
import CategorySelect from '../screens/Profile/CategorySelect';
import UserTypeSelect from '../screens/Profile/UserTypeSelect';
import CreateProfile from '../screens/Profile/CreateProfile';
import VerificationCode from '../screens/Profile/VerificationCode';
import CreateProfileSuccess from '../screens/Profile/CreateProfileSuccess'


import SetUserDetails from '../screens/Profile/SetUserDetails';

// ----------------Question --------------//
import ApartmentQuestion from '../screens/Questions/ApartmentQuestion';
import GuestQuestion from '../screens/Questions/GuestQuestion';
import PetQuestion from '../screens/Questions/PetQuestion';
import SmokeQuestion from '../screens/Questions/SmokeQuestion';
// import InterestSelection from '../screens/Questions/InterestSelection';
// import RoomList from '../screens/Home/RoomList';
// import RoomDetails from '../screens/Home/RoomDetails';

//-----------------LandLord --------------//
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
    CreateProfileSuccess,
    CreateAccount,
    CategorySelect,
    UserTypeSelect,
    SetUserDetails,
    VerificationCode,
    ApartmentQuestion,
    GuestQuestion,
    PetQuestion,
    SmokeQuestion,
    SetLocation,
    PropertyDetails,
    RoomDetails,
    AdSuccessful,
    LandLordAdCurrentRoommate,
    AdDetails
  },
  {
    initialRouteName: "LandLordAdCurrentRoommate",
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(MainNavigator);

const Routes = () => {
  return (
    <AppContainer />
  )
}
export default Routes;
