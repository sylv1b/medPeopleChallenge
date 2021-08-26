import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import jobs from '../data/jobs';
import JobListCarousel from '../components/JobListCaroussel/JobListCarousel';
import FakeBottomNavigator from '../components/FakeBottomNavigator/FakeBottomNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import Button from '../components/Button/Button';

export default function JobList({navigation}) {
  const jobList = jobs.jobs;

  const filterCampain = (jobs, campain) => {
    return jobs.filter(job => {
      return job.campaigns.includes(campain);
    });
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
            paddingTop: 5,
          }}>
          <Icon
            name="ios-person-circle-outline"
            size={22}
            color={colors.textGrey}
          />
          <Icon
            name="ios-briefcase-outline"
            size={22}
            color={colors.textGrey}
          />
          <Icon2 name="calendar-blank" size={22} color={colors.textGrey} />
          <Button
            text="Explore"
            backgroundColor={colors.lightPink}
            textColor="red"
          />
        </View>
      </FakeBottomNavigator>
    </View>
  );
}
