import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Header} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/Logo/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button/Button';
import IconButton from '../components/Button/IconButton';

const onPressButtons = () => {
  Alert.alert('🧑🏻‍⚕️ 👨🏿‍⚕️ 👩🏼‍⚕️\n\nWe are Medpeople!\n\n🏥');
};

const RatingStars = ({rating}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 5}}>
      {[...Array(parseInt(rating))].map((_, i) => (
        <Icon name="star-outline" size={18} color="white" key={`stars${i}`} />
      ))}
    </View>
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-back-outline" color="white" size={28} />
    </TouchableOpacity>
  );
};

const HeaderRight = () => (
  <View style={{flexDirection: 'row'}}>
    <IconButton
      name="share-social-outline"
      size={28}
      color="white"
      iconSet="Ionicons"
      style={{marginRight: 10}}
      onPress={() => onPressButtons()}
    />
    <IconButton
      name="heart-outlined"
      size={28}
      color="white"
      iconSet="Entypo"
      style={{marginRight: 10}}
      onPress={() => onPressButtons()}
    />
    <Button
      text="VIEW SHIFTS"
      backgroundColor="#6bc2a9"
      textColor="white"
      onPress={() => onPressButtons()}
    />
  </View>
);

export default function CustomHeader(props) {
  const navigation = useNavigation();
  const {job} = props;
  return (
    <ImageBackground
      source={{uri: job.background_image}}
      style={styles.image}
      resizeMode="cover">
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Header
            headerTransparent
            headerLeft={() => <BackButton />}
            headerRight={() => <HeaderRight />}
          />
          <View style={styles.employerContainer}>
            <Logo image={job.logo} size={40} />
            <View style={{marginLeft: 15}}>
              <Text style={styles.employerName}>{job.employer_name}</Text>
              <Text style={styles.location}>
                {job.department} in {job.address.city}
              </Text>
              <RatingStars rating={job.average_rating} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    height: 200,
  },
  safeArea: {
    height: '100%',
    justifyContent: 'space-between',
  },
  employerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  employerName: {
    fontSize: 20,
    color: 'white',
  },
  location: {
    fontSize: 14,
    color: 'white',
  },
  icon: {
    marginRight: 15,
  },
});
