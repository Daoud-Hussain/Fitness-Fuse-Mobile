import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

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

      {/* plans container */}
      <View style={styles.plansContainer}>
        <Text style={styles.planHead}>Today Work Plan</Text>
        <View style={styles.plans}>
          <View style={styles.card}>
            <ImageBackground
              source={require('./assets/Images/jogging.png')}
              resizeMode='cover'
              style={styles.planImg}>
              <Text style={styles.plansText}>Jogging</Text>
            </ImageBackground>
          </View>

          <View style={styles.card}>
            <ImageBackground
              source={require('./assets/Images/pushup.png')}
              resizeMode='cover'
              style={styles.planImg}>
              <Text style={styles.plansText}>Push-Up</Text>
            </ImageBackground>
          </View>

          <View style={styles.card}>
            <ImageBackground
              source={require('./assets/Images/squat.png')}
              resizeMode='cover'
              style={styles.planImg}>
              <Text style={styles.plansText}>Squat</Text>
            </ImageBackground>
          </View>
        </View>
      </View>

      {/* Categories container */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesHead}>Categories</Text>
        <View style={styles.categories}>
          <View style={styles.categoriesCard}>
            <ImageBackground
              source={require('./assets/Images/gym.png')}
              style={styles.categoriesImg}>
              <Text style={styles.categoriesText}>Gym</Text>
            </ImageBackground>
          </View>

          <View style={styles.categoriesCard}>
            <ImageBackground
              source={require('./assets/Images/yoga.png')}
              style={styles.categoriesImg}>
              <Text style={styles.categoriesText}>Push-Up</Text>
            </ImageBackground>
          </View>

          <View style={styles.categoriesCard}>
            <ImageBackground
              source={require('./assets/Images/fitness.png')}
              style={styles.categoriesImg}>
              <Text style={styles.categoriesText}>Fitness</Text>
            </ImageBackground>
          </View>

          <View style={styles.categoriesCard}>
            <ImageBackground
              source={require('./assets/Images/aerobics.png')}
              style={styles.categoriesImg}>
              <Text style={styles.categoriesText}>Aerobics</Text>
            </ImageBackground>
          </View>

          <View style={styles.categoriesCard}>
            <ImageBackground
              source={require('./assets/Images/back.png')}
              style={styles.categoriesImg}>
              <Text style={styles.categoriesText}>Back</Text>
            </ImageBackground>
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
  planHead: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
    paddingLeft: 20,
  },
  plans:{
    flexDirection: 'row'
  },

  planImg: {
    marginLeft: 20,
    marginTop: 10,
    width: 148,
    height: 169,
    borderRadius: 50,
    
  },
  plansText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',  
    paddingTop: 120
  },
  categories:{
    flexDirection: 'row'
  },
  categoriesHead: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 20,
    marginLeft: 5,
    paddingLeft: 20,
  },
  categoriesImg: {
    marginLeft: 20,
    marginTop: 10,
    width: 77,
    height: 104,
    borderRadius: 50,
    
  },
  categoriesText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',  
    paddingTop: 70
  },
  
});

export default App;
