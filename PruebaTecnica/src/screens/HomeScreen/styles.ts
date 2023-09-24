import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
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
    textAlign: 'justify',
    marginTop: 200,
    fontWeight: 'bold',
    fontSize: 50,
    width: '94%',
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
    marginVertical: 100,
    borderRadius: 12,
  },
  buttonText: {
    color: '#2196f3',
    textAlign: 'center',
    fontSize: 20,
  },
  subtitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    width: '90%',
    marginVertical: 80,
  },
  highLighted: {
    color: '#fa4800',
  },
  carouselContainer: {
    height: 800,
  },
  peopleImg: {
    width: '90%',
    resizeMode: 'contain',
    height: 150,
  },
  employee: {
    width: '90%',
  },
});

export default styles;
