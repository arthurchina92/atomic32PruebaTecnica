import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function WhiteButton() {
  return (
    <View style={styles.button}>
      <Button title="white button" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffff',
  },
});
