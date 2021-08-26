import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Logo({image, size}) {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: 'hidden',
    },
    image: {
      width: size,
      height: size,
    },
  });
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} resizeMode="contain" style={styles.image} />
    </View>
  );
}
