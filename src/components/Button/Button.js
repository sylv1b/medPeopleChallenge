import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';

export default function Button({
  text,
  icon,
  onPress,
  backgroundColor,
  textColor,
}) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 28,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      paddingHorizontal: 15,
      backgroundColor: backgroundColor || 'white',
      overflow: 'hidden',
    },
    text: {
      color: textColor || colors.textGrey,
      fontSize: 12,
      marginLeft: icon ? 5 : 0,
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      {icon && <Icon name={icon} size={14} color={textColor} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
