import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// Component Imports
import FindPlaces from '../screens/OnBoarding/FindPlaces';

import Login from '../screens/Auth/Login';

const MainNavigator = createStackNavigator(
  {
    FindPlaces,
    Login,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(MainNavigator);

const Routes = () => <AppContainer />;
export default Routes;
