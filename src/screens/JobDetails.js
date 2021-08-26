import React from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors';
import JobTypeIcon from '../components/JobTypeIcon/JobTypeIcon';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

export default function JobDetails({route}) {
  const {job} = route.params;

  const Section = ({title, children}) => (
    <View style={styles.sectionContainer}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      {children}
    </View>
  );

  const Separator = () => <View style={styles.separator} />;

  const getUniqueRates = shifts => {
    return shifts.reduce((acc, curr) => {
      if (
        !acc.find(
          rate =>
            rate.hourly_pay_in_eur === curr.hourly_pay_in_eur &&
            rate.type === curr.type &&
            rate.time === curr.time,
        )
      ) {
        acc.push({
          hourly_pay_in_eur: curr.hourly_pay_in_eur,
          type: curr.type,
          time: curr.time,
        });
      }
      return acc;
    }, []);
  };

  const calculateMonthlySalary = hourly_pay_in_eur => {
    const salary = Math.round((hourly_pay_in_eur * 40 * 52) / 12).toString();
    const stringLength = salary.length;
    return `${salary.substring(0, stringLength - 3)} ${salary.substring(
      stringLength - 3,
      stringLength,
    )}`;
  };

  const SalaryDetails = ({shifts}) => {
    const uniqueRates = getUniqueRates(shifts);
    return uniqueRates.map((rate, index) => (
      <View
        key={rate.type + index + rate.hourly_pay_in_eur}
        style={{marginTop: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <JobTypeIcon type={rate.type} />
            <Text style={styles.text}>{rate.time}</Text>
          </View>
          <Text style={styles.textBold}>{rate.hourly_pay_in_eur} €/hour</Text>
        </View>
        <Text style={styles.captionText}>
          Approx. {calculateMonthlySalary(rate.hourly_pay_in_eur)} €/month at
          full time
        </Text>
      </View>
    ));
  };

  const highestHourlyRate = getUniqueRates(job.available_shifts).sort(
    (a, b) => b.hourly_pay_in_eur - a.hourly_pay_in_eur,
  )[0];

  return (
    <ScrollView>
      <Section>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon
              name="ios-calendar-outline"
              size={22}
              color="{colors.textGrey}"
            />
            <Text style={[styles.textBoldSmall, {marginLeft: 5}]}>
              {job.available_shifts.length} shifts
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon name="wallet-outline" size={22} color="{colors.textGrey}" />
            <Text style={[styles.textBoldSmall, {marginLeft: 5}]}>
              {highestHourlyRate.hourly_pay_in_eur} €/hour
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon name="laptop-outline" size={22} color="{colors.textGrey}" />
            <Text style={[styles.textBoldSmall, {marginLeft: 5}]}>
              Carestream
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon name="home-outline" size={22} color="{colors.textGrey}" />
            <Text style={[styles.textBoldSmall, {marginLeft: 5}]}>
              {job.distance_in_km} km
            </Text>
          </View>
        </View>
      </Section>
      <Separator />
      <Section title="Tasks">
        <Text style={styles.descriptionText}>{job.tasks}</Text>
      </Section>
      <Separator />
      <Section title="Qualifications">
        <Text style={styles.descriptionText}>{job.qualifications}</Text>
      </Section>
      <Separator />
      <Section title="Salary and working hours">
        <Text style={styles.descriptionText}>
          The hourly rate may vary if the need is urgent or falls on red days.
        </Text>
        <SalaryDetails shifts={job.available_shifts} />
      </Section>
      <Separator />
      <Section title={`About ${job.employer_name}`}>
        <Text style={styles.descriptionText}>{job.employer_description}</Text>
        <View style={styles.map}>
          <View style={styles.location} />
        </View>
        <Text style={styles.text}>{job.address.street}</Text>
        <Text style={styles.text}>
          {job.address.postal_code} {job.address.city}
        </Text>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 30,
  },
  sectionTitle: {
    color: colors.textGrey,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    color: colors.textGreyLight,
    fontSize: 12,
  },
  text: {
    color: colors.textGreyLight,
  },
  textBold: {
    color: colors.textGreyLight,
    fontWeight: 'bold',
  },
  textBoldSmall: {
    color: colors.textGrey,
    fontWeight: 'bold',
    fontSize: 11,
  },
  captionText: {
    color: colors.textGreyLight,
    fontSize: 10,
    textAlign: 'right',
  },
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginHorizontal: 30,
  },
  map: {
    marginVertical: 20,
    height: 200,
    backgroundColor: '#b0eaff',
  },
  location: {
    width: 20,
    height: 20,
    backgroundColor: colors.pink,
    borderRadius: 15,
    position: 'absolute',
    bottom: 60,
    left: width / 2 - 40,
    borderWidth: 1,
    borderColor: '#008cbf',
  },
});
