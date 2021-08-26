import React from 'react';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function JobTypeIcon({type, size}) {
  let iconName = '';
  switch (type) {
    case 'night':
      iconName = 'moon-outline';
      break;
    case 'evening':
      iconName = 'partly-sunny-outline';
      break;
    case 'day':
      iconName = 'sunny-outline';
      break;
  }
  return (
    iconName !== '' && (
      <Icon
        name={iconName}
        size={size ? size : 12}
        color={colors.textGrey}
        style={{marginRight: 10}}
      />
    )
  );
}
