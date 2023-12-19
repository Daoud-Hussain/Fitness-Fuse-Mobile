import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <View style={styles.introText}>
          <Text style={styles.headingStyle}>Hello, Daoud</Text>
          <Text style={styles.textStyle}>Let's start your day</Text>
        </View>
        <Image
          source={require('./assets/Images/profile.jpg')}
          style={styles.homeImg}
        />
      </View>

      {/* Second container */}
      <View style={styles.plansContainer}>
        <Text style={styles.keyStyle}>Today Work Plan</Text>
        <View style={styles.plans}>
          <View style={styles.card}>
            <Image
              source={require('./assets/Images/jogging.png')}
              style={styles.planImg}
            />

            {/* <Image source={require('./assets/Images/jogging.PNG')} style={styles.homeImg}/> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    color: 'white',
  },
  intro: {
    flexDirection: 'row',
    padding: 20,
    marginLeft: 5,
    marginVertical: 10,
  },
  introText: {},
  headingStyle: {
    color: '#fff',
    fontSize: 16,
  },
  textStyle: {
    color: '#fff',
    fontSize: 24,
  },
  homeImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 85,
    marginTop: 5,
  },
  keyStyle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
    paddingLeft: 20,
  },
  planImg: {
    borderRadius: 15,
    margin: 20,
    marginTop: 10,
  },
});

export default App;
