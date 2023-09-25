import {View, ScrollView} from 'react-native';
import React from 'react';
import ImaginaCard from './ImaginaCard';
import ExploraCard from './ExploraCard';
import ConquistaCard from './ConquistaCard';
import styles from './styles';

export default function CardsCarousel() {
  return (
    <View style={styles.carouselContainer}>
      <ScrollView horizontal>
        <View style={styles.card}>
          <ImaginaCard />
        </View>
        <View style={styles.card}>
          <ExploraCard />
        </View>
        <View style={styles.card}>
          <ConquistaCard />
        </View>
      </ScrollView>
    </View>
  );
}
