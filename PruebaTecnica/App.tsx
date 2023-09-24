import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/router';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImaginaCard from './src/components/PhraseCards/ImaginaCard';
import ExploraCard from './src/components/PhraseCards/ExploraCard';
import ConquistaCard from './src/components/PhraseCards/ConquistaCard';
import CardsCarousel from './src/components/PhraseCards';
import LoginScreen from './src/screens/LoginScreen';

function App() {
  return (
    <>
      <LoginScreen />
    </>
  );
}

export default App;
