import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import React from 'react';
import img1 from '../../../assets/PaqueteAtomic/Group4023.png';
import bgImg from '../../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut3 from '../../../assets/PaqueteAtomic/Group4039.png';
import linkedinImg from '../../../assets/PaqueteAtomic/linkedin.png';
import twitterImg from '../../../assets/PaqueteAtomic/twitter.png';
import styles from './styles';
import Footer from '../../components/Footer';

export default function FinalScreen() {
  return (
    <ScrollView style={styles.body}>
      <ImageBackground source={bgImg} style={styles.image}>
        <View style={styles.titleContainer}>
          <Image source={img1} style={styles.image1} />
          <Text style={styles.title}>
            VALIDA TU <Text style={styles.highlighted}>CELULAR</Text>
          </Text>
        </View>
        <Text style={styles.text}>
          Necesitamos validar tu número para continuar
        </Text>
        <Text style={styles.text}>
          Ingresar tu número a 10 dígitos para continuar
        </Text>
        <Image source={astronaut3} style={styles.astronaut3} />
      </ImageBackground>
      <Footer />
    </ScrollView>
  );
}
