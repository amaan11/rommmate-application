import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './utils/Routes';

const App = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} />
      <Routes />
    </SafeAreaProvider>
  </NavigationContainer>
);

export default App;
