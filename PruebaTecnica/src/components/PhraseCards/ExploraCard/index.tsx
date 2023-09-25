import {View, Text, Image} from 'react-native';
import React from 'react';
import img from '../../../../assets/PaqueteAtomic/Group4036.png';
import styles from './styles';

export default function ExploraCard() {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.image} />
      <Text style={styles.cardTitle}>EXPLORA</Text>
      <View style={styles.textContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.dot} />
          <Text style={styles.cardText}>Inovación y creacion tecnológica</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dot} />
          <Text style={styles.cardText}>UI/UX</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dot} />
          <Text style={styles.cardText}>Innovación</Text>
        </View>
      </View>
    </View>
  );
}
