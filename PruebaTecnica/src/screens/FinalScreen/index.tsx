import {View, ScrollView, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import bgImg from '../../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut3 from '../../../assets/PaqueteAtomic/Group4039.png';
import styles from './styles';
import Footer from '../../components/Footer';

export default function FinalScreen() {
  return (
    <ScrollView style={styles.body}>
      <ImageBackground source={bgImg} style={styles.image}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            TUS DATOS HAN SIDO{' '}
            <Text style={styles.highlighted}>ENVIADOS CON ÉXITO</Text>
          </Text>
        </View>
        <Text style={styles.text}>
          En breve recibirás un correo de confirmación por parte del equipo de
          AtomicLabs.
        </Text>
        <Text style={styles.text}>
          Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!
        </Text>
        <Image source={astronaut3} style={styles.astronaut3} />
      </ImageBackground>
      <Footer />
    </ScrollView>
  );
}
