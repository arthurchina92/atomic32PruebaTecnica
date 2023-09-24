import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function ({worker}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: worker.avatar}} style={styles.avatar} />
      <Text style={styles.workerName}>{worker.name}</Text>
      <Text style={styles.workerPosition}>{worker.position}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 150,
    width: 150,
    marginBottom: 30,
  },
  imageContainer: {
    backgroundColor: '#004091',
    marginVertical: 15,
    paddingHorizontal: 110,
    paddingVertical: 40,
    borderRadius: 10,
  },
  workerName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  workerPosition: {
    fontSize: 20,
    color: '#ffff',
    textAlign: 'center',
  },
});
