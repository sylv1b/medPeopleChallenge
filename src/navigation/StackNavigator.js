import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobList from '../screens/JobList';
import JobDetails from '../screens/JobDetails';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Campains">
      <Stack.Screen name="campaigns" component={JobList} />
      <Stack.Screen name="JobDetails" component={JobDetails} />
    </Stack.Navigator>
  );
}
