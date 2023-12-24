import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
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

      {/* Plans container */}
      <Text style={styles.planHead}>Warmup Exercises</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.plansContainer}>
          <View style={styles.plans}>
            <View style={styles.card}>
              <ImageBackground
                source={require('./assets/Images/jogging.png')}
                resizeMode="cover"
                style={styles.planImg}>
                <Text style={styles.plansText}>Jogging</Text>
              </ImageBackground>
            </View>

            <View style={styles.card}>
              <ImageBackground
                source={require('./assets/Images/pushup.png')}
                resizeMode="cover"
                style={styles.planImg}>
                <Text style={styles.plansText}>Push-Up</Text>
              </ImageBackground>
            </View>

            <View style={styles.card}>
              <ImageBackground
                source={require('./assets/Images/cycling.png')}
                resizeMode="cover"
                style={styles.planImg}>
                <Text style={styles.plansText}>Cycling</Text>
              </ImageBackground>
            </View>

            <View style={styles.card}>
              <ImageBackground
                source={require('./assets/Images/battle-rope.png')}
                resizeMode="cover"
                style={styles.planImg}>
                <Text style={styles.plansText}>Battle Roap</Text>
              </ImageBackground>
            </View>

            
          </View>
        </View>
      </ScrollView>

      {/* Categories container */}
      <View style={styles.intros}>
          <Text style={styles.heading1}>Categories</Text>
          <Text style={styles.heading2}>See All</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
      </ScrollView>

      <View style={styles.intros}>
          <Text style={styles.heading1}>Trainer</Text>
          <Text style={styles.heading2}>See All</Text>
      </View>

      {/* Trainers Container */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.trainersContainer}>
          <View style={styles.trainersCard}>
            <Image
              source={require('./assets/Images/Richard.png')}
              style={styles.trainersImg}
            />
            <Text style={styles.trainersName}>Richard</Text>
          </View>
          <View style={styles.trainersCard}>
            <Image
              source={require('./assets/Images/Jennifier.png')}
              style={styles.trainersImg}
            />
            <Text style={styles.trainersName}>Jennifier</Text>
          </View>
          <View style={styles.trainersCard}>
            <Image
              source={require('./assets/Images/Brian.png')}
              style={styles.trainersImg}
            />
            <Text style={styles.trainersName}>Brian</Text>
          </View>
          <View style={styles.trainersCard}>
            <Image
              source={require('./assets/Images/Rebacca.png')}
              style={styles.trainersImg}
            />
            <Text style={styles.trainersName}>Rebacca</Text>
          </View>
          <View style={styles.trainersCard}>
            <Image
              source={require('./assets/Images/Emily.png')}
              style={styles.trainersImg}
            />
            <Text style={styles.trainersName}>Emily</Text>
          </View>
          <View style={styles.trainersCard}>
            <Image
              source={require('./assets/Images/Ronald.png')}
              style={styles.trainersImg}
            />
            <Text style={styles.trainersName}>Ronald</Text>
          </View>

        </View>
      </ScrollView>

      <View style={styles.intros}>
          <Text style={styles.heading1}>Diet Plans</Text>
          <Text style={styles.heading2}>See All</Text>
      </View>

      {/* Diet plans container */}
        <View style={styles.dietsSection}>
          <View style={styles.dietsCard}>
            <ImageBackground
              source={require('./assets/Images/Oatmeal.png')}
              style={styles.dietsImg}>
              <Text style={styles.dietsText}>Oatmeal</Text>
            </ImageBackground>
          </View>

          <View style={styles.dietsCard}>
            <ImageBackground
              source={require('./assets/Images/Waffles.png')}
              style={styles.dietsImg}>
              <Text style={styles.dietsText}>Waffles</Text>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.dietsSection}>
          <View style={styles.dietsCard}>
            <ImageBackground
              source={require('./assets/Images/Cornflakes.png')}
              style={styles.dietsImg}>
              <Text style={styles.dietsText}>Cornflakes</Text>
            </ImageBackground>
          </View>

          <View style={styles.dietsCard}>
            <ImageBackground
              source={require('./assets/Images/Fruits-Salad.png')}
              style={styles.dietsImg}>
              <Text style={styles.dietsText}>Fruits Salad</Text>
            </ImageBackground>
          </View>
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
    flexDirection: 'row',
    padding: 20,
    marginLeft: 5,
    marginVertical: 10,
  },
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
  plans: {
    flexDirection: 'row',
    marginRight: 15,
    borderRadius: 50,

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
    paddingTop: 120,
  },
  intros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 5
  },

  categories: {
    flexDirection: 'row',
    marginRight: 15
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
    paddingRight: 15
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
    paddingTop: 70,
  },

  trainersContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    marginRight: 15
  },
  trainersCard: {
    paddingTop: 5,
  },
  trainersImg: {
    marginLeft: 23,
    width: 55,
    height: 55,
  },

  trainersName: {
    color: '#fff',
    fontSize: 11,
    paddingTop: 8,
    textAlign: 'center',
    marginLeft: 23,
  },

  dietsSection: {
    flexDirection: 'row',
    marginBottom: 5
  },
  dietsCard: {
    marginLeft: 20,
    marginTop: 15,
  },

  dietsImg: {
    width: 170,
    height: 225,
    borderRadius: 50,
  },
  dietsText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 170,
  },
});

export default Home;
