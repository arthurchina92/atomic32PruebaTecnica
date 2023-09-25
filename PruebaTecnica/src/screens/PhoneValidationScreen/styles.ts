import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  image1: {
    height: 50,
    width: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 80,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  highlighted: {
    color: '#fa4800',
  },
  text: {
    color: '#ffff',
    width: '80%',
    textAlign: 'left',
    fontSize: 18,
    marginTop: 40,
  },
  textInputContainer: {
    width: '90%',
    marginTop: 40,
  },
  textInputText: {
    color: '#ffff',
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: '#ffff',
    borderRadius: 7,
    padding: 11,
  },
  button: {
    backgroundColor: '#fa4800',
    marginTop: 70,
    width: '56%',
    alignItems: 'center',
    padding: 13,
    borderRadius: 50,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 20,
  },
  errorText: {
    color: '#c20000',
  },
  astronaut2: {
    height: 500,
    width: 480,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#000000',
    textAlign: 'center',
  },
  footerText: {
    color: '#ffff',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    height: 25,
    resizeMode: 'contain',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  lock: {
    position: 'absolute',
    right: 10,
    marginTop: 47,
    zIndex: 1,
  },
});

export default styles;
