import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './utils/Routes';
import configureStore from "./redux/store"

const store = configureStore()

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <Routes token={token} />
    </Provider>
  </NavigationContainer>
);
const mapStateToProps = state => {
  return {
    token: state.auth.user.token
  }
}

export default connect(mapStateToProps, null)(App);
