import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fa4800',
    width: '92%',
    height: '65%',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    alignItems: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    height: 200,
    marginBottom: 35,
  },
  cardTitle: {
    fontSize: 35,
    color: '#ffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
  cardText: {
    fontSize: 20,
    textAlign: 'right',
    color: '#ffff',
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    alignSelf: 'flex-start',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#ffff',
    borderRadius: 50,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});

export default styles;
