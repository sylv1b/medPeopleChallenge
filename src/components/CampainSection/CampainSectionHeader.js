import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';

export default function CampainSectionHeader({title, icon}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={icon} color={colors.textGrey} size={18} />
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    overflow: 'hidden',
    backgroundColor: colors.pink,
    marginLeft: 30,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: colors.textGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
