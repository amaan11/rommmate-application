import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { get } from 'lodash'
import Routes from './utils/Routes';
import configureStore from "./redux/store"

const store = configureStore()

const App = () => {
  const token = get(store.getState().user, "token", null)
  console.log("token0>>", token)

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes token={token} />
      </Provider>
    </NavigationContainer>
  )
}


export default (App);
