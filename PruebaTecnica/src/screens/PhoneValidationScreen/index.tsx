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
import img1 from '../../../assets/PaqueteAtomic/Group4023.png';
import bgImg from '../../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut2 from '../../../assets/PaqueteAtomic/Group4034.png';
import linkedinImg from '../../../assets/PaqueteAtomic/linkedin.png';
import twitterImg from '../../../assets/PaqueteAtomic/twitter.png';
import styles from './styles';

export default function PhoneValidationScreen() {
  const [numero, setNumero] = useState('');
  const [numeroError, setNumeroError] = useState(false);
  const [numeroMensajeError, setNumeroMensajeError] = useState('');
  const validarNumero = text => {
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
        <TouchableHighlight style={styles.button}>
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
