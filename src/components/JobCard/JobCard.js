import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getMaxSalary from '../../utils/getMaxSalary';
import Logo from '../Logo/Logo';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../styles/colors';
import JobTypeIcon from '../JobTypeIcon/JobTypeIcon';
import StarIcon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default function JobCard({onPress, job}) {
  const availableShifts = job.available_shifts;
  const maxSalary = getMaxSalary(availableShifts);
  const shiftTypes = availableShifts.reduce((acc, curr) => {
    if (!acc.includes(curr.type)) {
      acc.push(curr.type);
    }
    return acc;
  }, []);

  return (
    <TouchableOpacity onPress={() => onPress(job)} style={styles.shadowBox}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={{uri: job.background_image}}
            style={styles.headerImage}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']}
              style={[styles.headerImage, {padding: 20}]}>
              <Logo size={35} image={job.logo} />
              <Icon name="heart-outlined" size={35} color="white" />
            </LinearGradient>
          </ImageBackground>
        </View>
        <View style={styles.bodyAndFooterWarper}>
          <View style={styles.bodyContainer}>
            <Text style={styles.name}>{job.employer_name}</Text>
            <View style={styles.departmentContainer}>
              <Text style={styles.department}>{job.department}</Text>
            </View>
            <View style={styles.shiftDescriptionContainer}>
              <Text style={styles.text}>Up to {maxSalary} per shift</Text>
              <Text style={styles.text}>
                {job.available_shifts.length} shifts
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.separator} />
            <View style={styles.footerContainer}>
              <View style={{flexDirection: 'row'}}>
                {shiftTypes.map((shift, i) => (
                  <JobTypeIcon type={shift} size={14} key={`${i}`} />
                ))}
              </View>
              <View style={styles.ratingContainer}>
                <StarIcon
                  name="star-outline"
                  size={14}
                  color={colors.textGrey}
                />
                <Text style={styles.ratingText}>{job.average_rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 2,
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 3,
    height: 300,
    width: width - 70,
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  headerContainer: {
    height: 70,
    backgroundColor: 'grey',
    overflow: 'hidden',
  },
  headerImage: {
    flexDirection: 'row',
    height: 70,
    width: width - 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyAndFooterWarper: {
    flexDirection: 'column',
    height: 230,
    justifyContent: 'space-between',
  },
  bodyContainer: {
    padding: 20,
  },
  shiftDescriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerContainer: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,.1)',
    marginHorizontal: 20,
  },
  name: {
    color: colors.textGrey,
    fontSize: 15,
    fontWeight: 'bold',
  },
  departmentContainer: {
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    marginVertical: 6,
  },
  department: {
    color: colors.textGrey,
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: colors.lightPink,
    padding: 5,
  },
  text: {
    color: colors.textGrey,
    fontSize: 11,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    justifyContent: 'center',
    color: colors.textGrey,
    fontSize: 11,
    marginLeft: 3,
  },
});
