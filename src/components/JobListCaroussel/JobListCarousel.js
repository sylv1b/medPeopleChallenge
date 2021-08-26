import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import JobCard from '../JobCard/JobCard';
import {useNavigation} from '@react-navigation/native';
import CampainSectionHeader from '../CampainSection/CampainSectionHeader';

const {width} = Dimensions.get('window');

export default function JobListCarousel({jobList, title, icon}) {
  const navigation = useNavigation();

  const onPress = job => navigation.navigate('JobDetails', {job: job});

  const separator = () => <View style={styles.separator} />;

  const header = () => <View style={styles.header} />;

  return (
    <View style={styles.container}>
      <CampainSectionHeader title={title} icon={icon} />
      <FlatList
        data={jobList}
        keyExtractor={(item, index) => `${index.toString()}${title}`}
        renderItem={({item}) => <JobCard job={item} onPress={onPress} />}
        horizontal
        style={styles.flatList}
        ItemSeparatorComponent={separator}
        ListHeaderComponent={header}
        ListFooterComponent={header}
        showsHorizontalScrollIndicator={false}
        // pagingEnabled
        snapToInterval={width - 50}
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  flatList: {
    //paddingHorizontal: 10,
  },
  separator: {
    width: 20,
  },
  header: {
    width: 30,
  },
});
