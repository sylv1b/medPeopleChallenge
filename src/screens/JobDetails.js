import React from 'react';
import {View, Text} from 'react-native';

export default function JobDetails({route}) {
  console.log(route.params);
  const {job} = route.params;

  return (
    <View>
      <Text>{job.tasks}</Text>
    </View>
  );
}
