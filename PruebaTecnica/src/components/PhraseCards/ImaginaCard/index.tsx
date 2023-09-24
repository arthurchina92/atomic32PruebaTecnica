import {View, Text, Image} from 'react-native';
import React from 'react';
import img from '../../../../assets/PaqueteAtomic/Group4036.png';
import styles from './styles';

export default function ImaginaCard() {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.image} />
      <Text style={styles.cardTitle}>IMAGINA</Text>
      <View style={styles.textContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.dot}></View>
          <Text style={styles.cardText}>Estrategia Digital</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dot}></View>
          <Text style={styles.cardText}>Big Data & Analysis</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dot}></View>
          <Text style={styles.cardText}>Consultoría Tecnológica</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dot}></View>
          <Text style={styles.cardText}>Reducción de costos TI</Text>
        </View>
      </View>
    </View>
  );
}
