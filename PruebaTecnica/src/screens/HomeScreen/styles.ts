import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  astronautImg: {
    height: 320,
    width: '90%',
  },
  title: {
    textAlign: 'justify',
    marginTop: 200,
    fontWeight: 'bold',
    fontSize: 50,
    width: '94%',
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
    width: '60%',
    padding: 20,
    marginVertical: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#2196f3',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    width: '90%',
    marginVertical: 30,
  },
  highLighted: {
    color: '#fa4800',
  },
  carouselContainer: {
    height: 650,
    width: '90%',
  },
  peopleImg: {
    width: '90%',
    resizeMode: 'contain',
    height: 150,
  },
  workers: {
    marginBottom: 60,
  },
  footerContainer: {
    backgroundColor: '#000000',
  },
});

export default styles;
