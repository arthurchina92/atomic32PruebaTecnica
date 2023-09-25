import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/router';
import LoginScreen from './src/screens/LoginScreen';
import PhoneValidationScreen from './src/screens/PhoneValidationScreen';
import Footer from './src/components/Footer';
import HomeScreen from './src/screens/HomeScreen';
import FinalScreen from './src/screens/FinalScreen';
import {store} from './store/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
