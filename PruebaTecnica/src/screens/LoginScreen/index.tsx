import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import img1 from '../../../assets/PaqueteAtomic/Group40142x.png';
import bgImg from '../../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut2 from '../../../assets/PaqueteAtomic/Group4033.png';
import styles from './styles';
import Footer from '../../components/Footer';
import {useAppDispatch, useAppSelector} from '../../../store/hook';
import {setName, setLastName} from '../../../store/slices/userInformationSlice';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const validarNombre = (text: string) => {
    if (text.length < 5) {
      setNombreError(true);
    } else {
      setNombreError(false);
    }
    dispatch(setName(text));
    setNombre(text); // Actualizar el valor del nombre
  };

  const validarApellido = (text: string) => {
    if (text.length < 5) {
      setApellidoError(true);
    } else {
      setApellidoError(false);
    }
    dispatch(setLastName(text));
    setApellido(text); // Actualizar el valor del apellido
  };

  const [nombreError, setNombreError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);

  const handleEnviar = () => {
    // Realizar el envío o la acción deseada si los nombres son válidos
    if (!nombreError && !apellidoError) {
      navigation.navigate('Phone');
    }
  };

  return (
    <ScrollView>
      <ImageBackground source={bgImg} style={styles.image}>
        <View style={styles.titleContainer}>
          <Image source={img1} style={styles.image1} />
          <Text style={styles.title}>
            TE QUEREMOS <Text style={styles.highlighted}>CONOCER</Text>
          </Text>
        </View>
        <Text style={styles.text}>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </Text>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputText}>Nombre(s)</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={validarNombre}
            value={nombre}
          />
          {nombreError && (
            <Text style={styles.errorText}>
              El nombre debe tener al menos 5 caracteres
            </Text>
          )}
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputText}>Apellido(s)</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={validarApellido}
            value={apellido}
          />
          {apellidoError && (
            <Text style={styles.errorText}>
              El nombre debe tener al menos 5 caracteres
            </Text>
          )}
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleEnviar()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableHighlight>
        <Image source={astronaut2} />
      </ImageBackground>
      <Footer />
    </ScrollView>
  );
}
