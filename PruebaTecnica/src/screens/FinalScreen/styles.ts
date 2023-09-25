import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
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
  astronaut3: {
    height: 400,
    width: 450,
    resizeMode: 'contain',
  },
});

export default styles;
