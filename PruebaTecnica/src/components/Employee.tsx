import {View, Text} from 'react-native';
import React from 'react';

export default function ({worker}) {
  return (
    <View>
      <Text>{worker.name}</Text>
    </View>
  );
}
