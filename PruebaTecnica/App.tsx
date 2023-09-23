import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import imageBg from './Assets/PaqueteAtomic/MaskGroup1.png';
import astronautImg from './Assets/PaqueteAtomic/Group4032.png';

function App() {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={imageBg} style={styles.imageBg}>
          <Text style={styles.title}>
            Desarrolla todo tu POTENCIAL dentro del equipo ATOMICLABS
          </Text>
          <Image source={astronautImg} style={styles.astronautImg} />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  astronautImg: {
    height: 320,
    width: '90%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    width: '90%',
    marginBottom: 30,
  },
});

export default App;
