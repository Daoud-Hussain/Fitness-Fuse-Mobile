import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  Touchable,
} from 'react-native';

const TrainersDetails = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Images/Jennifier-details.png')} />
      <View style={styles.intro}>
        <View style={styles.introText}>
          <Text style={styles.textStyle}>Jennifier James</Text>
          <Text style={styles.bioStyle}>Functional Strength</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.experience}>
            <Text style={styles.number}>6</Text>
            <Text style={styles.desc}>Experience</Text>
          </View>
          <View style={styles.experience}>
            <Text style={styles.number}>46</Text>
            <Text style={styles.desc}>Completed</Text>
          </View>
          <View style={styles.experience}>
            <Text style={styles.number}>25</Text>
            <Text style={styles.desc}>Active Clients</Text>
          </View>
        </View>
      </View>

      <View style={styles.intros}>
        <Text style={styles.heading1}>Reviews</Text>
        <Text style={styles.heading2}>See All</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    color: 'white',
    flexDirection: 'column',
  },
  intro: {
    minHeight: '85%',
    marginBottom: 10,
  },
  introText: {
    padding: 20,
    marginLeft: 10,
    flexDirection: 'column',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 5,
  },
  bioStyle: {
    color: '#fff',
    fontSize: 13,
    paddingBottom: 5,
  },
  card: {
    flexDirection: 'row',
    width: '84%',
    height: 90,
    padding: 15,
    backgroundColor: '#3A3A3C',
    marginHorizontal: '8%',
    borderRadius: 15,
  },
  experience: {
    flexDirection: 'column',
    width: '33%',
  },

  number: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 4,
  },
  desc: {
    textAlign: 'center',
    fontSize: 13,
    color: 'white',
  },
  intros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 5,
  },
  
  heading1: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 10,
    marginLeft: 8,
    paddingLeft: 15,
  },
  heading2: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 10,
    marginRight: 8,
    paddingRight: 15,
  },
});

export default TrainersDetails;
