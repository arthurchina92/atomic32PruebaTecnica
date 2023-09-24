import {View, Text, Image} from 'react-native';
import React from 'react';
import linkedinImg from '../../../assets/PaqueteAtomic/linkedin.png';
import twitterImg from '../../../assets/PaqueteAtomic/twitter.png';
import styles from './styles';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        2020 AtomicLabs. Todos los derechos reservados
      </Text>
      <Text style={styles.footerText}>Aviso de privacidad</Text>
      <View style={styles.icons}>
        <Image source={linkedinImg} style={styles.iconImg} />
        <Image source={twitterImg} style={styles.iconImg} />
      </View>
    </View>
  );
}
