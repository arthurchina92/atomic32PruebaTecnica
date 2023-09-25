import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

interface Worker {
  id: number;
  name: string;
  position: string;
  avatar: string;
}
interface WorkerItemProps {
  worker: Worker;
}

export default function WorkerItem({worker}: WorkerItemProps) {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: worker.avatar}} style={styles.avatar} />
      <Text style={styles.workerName}>{worker.name}</Text>
      <Text style={styles.workerPosition}>{worker.position}</Text>
    </View>
  );
}
