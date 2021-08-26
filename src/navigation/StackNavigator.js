import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobList from '../screens/JobList';
import JobDetails from '../screens/JobDetails';
import colors from '../styles/colors';
import CustomHeader from './CustomHeader';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="campaigns"
      screenOptions={({route}) => {
        if (route.name === 'JobDetails') {
          const {job} = route.params;
          return {
            header: () => <CustomHeader job={job} />,
          };
        } else {
          return {
            headerTintColor: colors.textGrey,
          };
        }
      }}>
      <Stack.Screen
        name="campaigns"
        component={JobList}
        options={{title: 'Campaigns'}}
      />
      <Stack.Screen name="JobDetails" component={JobDetails} />
    </Stack.Navigator>
  );
}
