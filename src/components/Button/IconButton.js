import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function IconButton({
  name,
  color,
  size,
  iconSet,
  onPress,
  style,
}) {
  const IconComponent = ({iconSet, name, color, size}) => {
    switch (iconSet) {
      case 'Ionicons':
        return <Ionicons name={name} color={color} size={size} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={name} color={color} size={size} />;
      case 'Entypo':
        return <Entypo name={name} color={color} size={size} />;
      default:
        return (
          <View>
            <Text>?</Text>
          </View>
        );
    }
  };
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <IconComponent iconSet={iconSet} name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}
