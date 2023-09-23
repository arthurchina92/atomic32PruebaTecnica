import {React, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import image from '../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut from '../../assets/PaqueteAtomic/Group4032.png';
import arrow from '../../assets/PaqueteAtomic/Group40132x.png';
import peopleImg from '../../assets/PaqueteAtomic/Group4040.png';
import EmployeesColumn from '../components/EmployeesColumn';

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
          <Text>CARROUSEL</Text>
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
    marginTop: 150,
    fontWeight: 'bold',
    fontSize: 50,
    width: '90%',
    marginBottom: 30,
    color: '#ffff',
  },
  arrowContainer: {
    marginBottom: 40,
  },
  arrow: {
    height: 80,
    resizeMode: 'contain',
  },
  arrowText: {
    color: '#ffff',
    alignSelf: 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#ffff',
    width: '50%',
    padding: 10,
    marginVertical: 50,
    borderRadius: 12,
  },
  buttonText: {
    color: '#2196f3',
    textAlign: 'center',
    fontSize: 20,
  },
  subtitle: {
    fontSize: 40,
    color: '#ffff',
    textAlign: 'center',
    width: '90%',
    marginBottom: 40,
  },
  highLighted: {
    color: '#fa4800',
  },
  peopleImg: {
    width: '90%',
    resizeMode: 'contain',
    height: 150,
  },
});

export default HomeScreen;
