import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function OrangeButton() {
  return (
    <View>
      <Button title="orange button" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fa4800',
  },
});
