import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

const AgeScreen = () => {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(160);
  const [profileImage, setProfileImage] = useState(require('./assets/Images/default-img.jpg'));

  useEffect(() => {
    // Load data from AsyncStorage on component mount
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedAge = await AsyncStorage.getItem('age');
      const storedHeight = await AsyncStorage.getItem('height');
      const storedImage = await AsyncStorage.getItem('profileImage');

      if (storedAge) setAge(parseInt(storedAge, 10));
      if (storedHeight) setHeight(parseInt(storedHeight, 10));
      if (storedImage) setProfileImage({ uri: storedImage });
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('age', age.toString());
      await AsyncStorage.setItem('height', height.toString());
      if (profileImage.uri) {
        await AsyncStorage.setItem('profileImage', profileImage.uri);
      }
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const increaseAge = () => {
    setAge((prevAge) => (prevAge < 99 ? prevAge + 1 : prevAge));
  };

  const decreaseAge = () => {
    setAge((prevAge) => (prevAge > 0 ? prevAge - 1 : prevAge));
  };

  const increaseHeight = () => {
    setHeight((prevHeight) => (prevHeight < 220 ? prevHeight + 1 : prevHeight));
  };

  const decreaseHeight = () => {
    setHeight((prevHeight) => (prevHeight > 0 ? prevHeight - 1 : prevHeight));
  };

  const pickImage = async () => {
    try {
      const response = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        cropperCircleOverlay: true,
        cropperCancelText: 'Cancel',
        cropperChooseText: 'Choose',
      });

      if (response && !response.didCancel) {
        setProfileImage({ uri: response.path });
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const onNextPress = async () => {
    // Save data to AsyncStorage before navigating to the next screen
    await saveData();

    console.log('Next button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.header}>
          <Text style={styles.heading}>Fitness Fuse</Text>
          <Text style={styles.subheading}>Complete your Profile</Text>
        </View>
        <View style={styles.ageSelection}>
          <Text style={styles.text}>Select your age</Text>
          <View style={styles.ageSelectionInner}>
            <FontAwesome name="calendar" size={24} color="rgba(155, 8, 8, 1)" />
            <View style={styles.ageTextContainer}>
              <Text style={styles.ageText}>{age}</Text>
            </View>
            <View style={styles.tbButtons}>
              <TouchableOpacity onPress={increaseAge}>
                <AntDesign name="caretup" size={24} color="rgba(155, 8, 8, 1)" />
              </TouchableOpacity>
              <TouchableOpacity onPress={decreaseAge}>
                <AntDesign name="caretdown" size={24} color="rgba(255, 255, 255, 0.15)" />
              </TouchableOpacity>
            </View>
            <Text style={styles.yeartext}>years</Text>
          </View>
        </View>

        <View style={styles.heightSelection}>
          <Text style={styles.text}>Select your Height</Text>
          <View style={styles.heightSelectionInner}>
            <MaterialCommunityIcons name="human-male-height-variant" size={24} color="rgba(155, 8, 8, 1)" />
            <View style={styles.ageTextContainer}>
              <Text style={styles.ageText}>{height}</Text>
            </View>
            <View style={styles.tbButtons}>
              <TouchableOpacity onPress={increaseHeight}>
                <AntDesign name="caretup" size={24} color="rgba(155, 8, 8, 1)" />
              </TouchableOpacity>
              <TouchableOpacity onPress={decreaseHeight}>
                <AntDesign name="caretdown" size={24} color="rgba(255, 255, 255, 0.15)" />
              </TouchableOpacity>
            </View>
            <Text style={styles.yeartext}>cm</Text>
          </View>
        </View>
        <View style={styles.PimageView}>
          <TouchableOpacity onPress={pickImage}>
            <Image source={profileImage} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.userName}>Upload your professional image</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <AntDesign name="leftcircle" size={24} color="white" style={{ marginTop: 20 }} />
        <View style={{ height: 200, width: 320, marginTop: 0, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={onNextPress} style={styles.nextButtonContainer}>
            <Text style={styles.nextButtonText}>Next</Text>
            <AntDesign name="caretright" size={14} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  head: {
    margin: 20,
    marginTop: 60,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subheading: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    color: 'white',
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  ageSelection: {
    marginTop: 0,
  },
  ageSelectionInner: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(217, 217, 217, 0.15)',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  heightSelectionInner: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(217, 217, 217, 0.15)',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  tbButtons: {
    alignItems: 'center',
    marginLeft: 'auto',
  },
  ageTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ageText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  yeartext: {
    color: 'white',
    marginLeft: 10,
  },
  heightSelection: {
    marginTop: -20,
  },
  PimageView: {
    marginTop: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 2,
  },
  userName: {
    fontSize: 13,
    margin: 14,
    color: 'white',
    alignSelf: 'center',
  },
  nextButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#9B0808',
    width: 100,
    padding: 10,
    gap: 12,
    borderRadius: 30,
    marginRight: 15,
    marginTop: 10,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
});

export default AgeScreen;
