import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default function FakeBottomNavigator({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: 'white',
    borderTopColor: colors.separator,
    borderTopWidth: 0.5,
  },
});
