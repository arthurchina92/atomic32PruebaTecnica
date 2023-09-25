import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/router';
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
