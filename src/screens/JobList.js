import React from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import jobs from '../data/jobs';
import JobListCarousel from '../components/JobListCaroussel/JobListCarousel';
import FakeBottomNavigator from '../components/FakeBottomNavigator/FakeBottomNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import Button from '../components/Button/Button';
import IconButton from '../components/Button/IconButton';

export default function JobList({navigation}) {
  const jobList = jobs.jobs;

  const filterCampain = (jobs, campain) => {
    return jobs.filter(job => {
      return job.campaigns.includes(campain);
    });
  };

  const onPressButtons = () => {
    Alert.alert('🧑🏻‍⚕️ 👨🏿‍⚕️ 👩🏼‍⚕️\n\nWe are Medpeople!\n\n🏥');
  };

  return (
    <View>
      <ScrollView>
        <JobListCarousel
          title="Urgent vacancies"
          icon="flash-outline"
          jobList={filterCampain(jobList, 'Urgent Vacancies')}
        />
        <JobListCarousel
          title="Week end shifts"
          icon="ios-calendar-outline"
          jobList={filterCampain(jobList, 'Weekend shifts')}
        />
        <JobListCarousel
          title="Best paid shifts"
          icon="ios-cash-outline"
          jobList={filterCampain(jobList, 'Best paid shifts')}
        />
        <View style={{height: 80}} />
      </ScrollView>
      <FakeBottomNavigator>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 10,
          }}>
          <IconButton
            name="ios-person-circle-outline"
            size={22}
            color={colors.textGrey}
            iconSet="Ionicons"
            onPress={() => onPressButtons()}
          />
          <IconButton
            name="ios-briefcase-outline"
            size={22}
            color={colors.textGrey}
            iconSet="Ionicons"
            onPress={() => onPressButtons()}
          />
          <IconButton
            name="calendar-blank"
            size={22}
            color={colors.textGrey}
            iconSet="MaterialCommunityIcons"
            onPress={() => onPressButtons()}
          />
          <Button
            text="Explore"
            backgroundColor={colors.lightPink}
            textColor="red"
            icon="search-outline"
            onPress={() => onPressButtons()}
          />
        </View>
      </FakeBottomNavigator>
    </View>
  );
}
