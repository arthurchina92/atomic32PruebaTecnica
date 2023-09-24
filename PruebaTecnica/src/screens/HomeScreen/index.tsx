import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import image from '../../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut from '../../../assets/PaqueteAtomic/Group4032.png';
import arrow from '../../../assets/PaqueteAtomic/Group40132x.png';
import peopleImg from '../../../assets/PaqueteAtomic/Group4040.png';
import EmployeesColumn from '../../components/EmployeesColumn';
import CardsCarousel from '../../components/PhraseCards';
import styles from './styles';

function HomeScreen() {
  return (
    <ScrollView>
      <ImageBackground source={image} style={styles.imageBg}>
        <Text style={styles.title}>
          Desarrolla todo tu POTENCIAL dentro del equipo ATOMICLABS
        </Text>
        <View style={styles.arrowContainer}>
          <Image source={arrow} style={styles.arrow} />
          <Text style={styles.arrowText}> Quiero saber más </Text>
        </View>
        <Image source={astronaut} style={styles.astronautImg} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          SOMOS EL BRAZO DERECHO{' '}
          <Text style={styles.highLighted}>DE LA TECNOLOGÍA</Text>
        </Text>
        <View>
          <View style={styles.carouselContainer}>
            <CardsCarousel />
          </View>
        </View>

        <Text style={styles.subtitle}>
          ¡TE ENCANTARÁ{' '}
          <Text style={styles.highLighted}>TRABAJAR CON NOSOTROS!</Text>
        </Text>
        <Image source={peopleImg} style={styles.peopleImg} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          NUESTRO <Text style={styles.highLighted}>EQUIPO</Text>
        </Text>
        <EmployeesColumn />
      </ImageBackground>
    </ScrollView>
  );
}

export default HomeScreen;
