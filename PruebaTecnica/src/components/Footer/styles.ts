import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
