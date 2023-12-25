import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const Workout = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/Images/profile.jpg')}
        style={styles.homeImg}
      />
      <View style={styles.intro}>
        <View style={styles.introText}>
          <Text style={styles.headingStyle}>Welcome, Daoud</Text>
          <Text style={styles.textStyle}>
            Empower yourself to make the changes you need to make.
          </Text>
        </View>

        <View style={styles.daySection}>
          <View style={styles.day}>
            <Text style={styles.dayText}> Sat</Text>
          </View>
          <Text style={styles.textSection}>Time to workout</Text>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{color: '#fff', fontSize: 12, marginLeft: 15}}>
          GUIDED TRAINING
        </Text>
        <View style={styles.horizontalLine} />
      </View>

      <View>
        <ImageBackground
          source={require('./assets/Images/Chest-Exercise.png')}
          style={styles.workoutImg}>
          <Text style={styles.workoutText1}>CHEST & ARMS</Text>
          <View style={styles.workoutText2}>
            <Text style={styles.workoutText}> Recommended</Text>
          </View>
          <Text style={styles.workoutText3}>Dynamic Warmup | 22 Minutes</Text>
        </ImageBackground>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{color: '#fff', fontSize: 12, marginLeft: 15}}>
          NEXT EXERCISE
        </Text>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    color: 'white',
  },
  intro: {
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: 10,
  },
  headingStyle: {
    color: '#fff',
    fontSize: 16,
  },
  textStyle: {
    color: '#959595',
    fontSize: 12,
    paddingTop: 2,
  },
  homeImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 15,
    marginTop: 25,
  },
  daySection: {
    flexDirection: 'row',
    backgroundColor: '#3A3A3C',
    width: 189,
    height: 33,
    borderRadius: 50,
    paddingLeft: 5,
    marginTop: 13,
    marginLeft: 5,
  },
  day: {
    backgroundColor: '#9B0808',
    width: 50,
    height: 27,
    marginTop: 3,
    borderRadius: 50,
  },
  dayText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 3,
    fontWeight: 'bold',
    fontSize: 14,
  },
  textSection: {
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 10,
    color: '#fff',
  },
  horizontalLine: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
    marginLeft: '28%',
  },
  workoutImg: {
    marginLeft: 10,
    marginTop: 10,
    width: 375,
    height: 220,
    borderRadius: 50,
  },
  workoutText1: {
    paddingLeft: 20,
    paddingTop: '27%',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  workoutText2: {
    backgroundColor: '#9B0808',
    width: 130,
    height: 29,
    marginLeft: 20,
    textAlign: 'center',
    borderRadius: 50,
    marginVertical: 3
  },
  workoutText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 3,
    fontSize: 16,
  },
  workoutText3: {
    color: '#fff',
    paddingLeft: 20,
    fontSize: 14,
  }
});

export default Workout;
