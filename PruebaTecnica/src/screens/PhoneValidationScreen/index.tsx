import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import img1 from '../../../assets/PaqueteAtomic/Group4023.png';
import bgImg from '../../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut2 from '../../../assets/PaqueteAtomic/Group4034.png';
import linkedinImg from '../../../assets/PaqueteAtomic/linkedin.png';
import twitterImg from '../../../assets/PaqueteAtomic/twitter.png';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../../store/hook';
import {setNumber} from '../../../store/slices/userInformationSlice';
import {useNavigation} from '@react-navigation/native';

export default function PhoneValidationScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {firstname, lastname, phoneNumber} = useAppSelector(
    state => state.userInformation,
  );
  const [numero, setNumero] = useState('');
  const [numeroError, setNumeroError] = useState(false);
  const [numeroMensajeError, setNumeroMensajeError] = useState('');

  const sendData = () => {
    fetch('https://atomic-test-api.onrender.com/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        phoneNumber: phoneNumber,
      }),
    })
      .then(response => {
        if (!response.ok) {
          console.log(response.status);
          if (response.status === 422) {
            Alert.alert('error en el sistema (random error)');
          } else if (response.status === 405) {
            Alert.alert('Method not allowed(405)');
          }

          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log('boton presionado');
        navigation.navigate('Final');
      })
      .catch(error => {
        console.log('dio error');
        console.error(error);
      });
  };

  const validarNumero = (text: String) => {
    // Expresión regular para verificar si el texto contiene solo dígitos numéricos
    const regex = /^[0-9]+$/;

    if (!regex.test(text)) {
      setNumeroError(true);
      setNumeroMensajeError('Ingrese solo números');
    } else if (text.length < 10) {
      setNumeroError(true);
      setNumeroMensajeError('El número debe tener al menos 10 dígitos');
    } else {
      setNumeroError(false);
      setNumeroMensajeError('');
    }
    dispatch(setNumber(text));
    setNumero(text); // Actualizar el valor del número
  };

  return (
    <ScrollView>
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
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputText}>Número</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={validarNumero}
            value={numero}
          />
          {numeroError && (
            <Text style={styles.errorText}>{numeroMensajeError}</Text>
          )}
        </View>
        <TouchableHighlight onPress={() => sendData()} style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableHighlight>
        <Image source={astronaut2} style={styles.astronaut2} />
      </ImageBackground>
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
    </ScrollView>
  );
}
