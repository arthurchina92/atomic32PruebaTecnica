import {View, Text, Image} from 'react-native';
import React from 'react';
import img from '../../../../assets/PaqueteAtomic/Group4037.png';
import styles from './styles';

export default function ConquistaCard() {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.image} />
      <Text style={styles.cardTitle}>CONQUISTA</Text>
      <View style={styles.textContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.dot}></View>
          <Text style={styles.cardText}>
            Desarrollo tecnológico y creación tecnológica
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dot}></View>
          <Text style={styles.cardText}>Ciberseguridad</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dot}></View>
          <Text style={styles.cardText}>Servicios de la nube</Text>
        </View>
      </View>
    </View>
  );
}
