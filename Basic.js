import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const BasicScreen = ({navigation}) => {
  const [ageInput, setAgeValue] = useState('');
  const [weightInput, setWeightValue] = useState('');
  const [heightInput, setHeightValue] = useState('');
  const [goalInput, setGoalValue] = useState('');
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedDietType, setSelectedDietType] = useState('vegetarian');

  const handleSave = async () => {
    const gpt35ApiUrl = 'https://api.openai.com/v1/completions';
    const prompt = `Gender: ${selectedGender}, Age: ${ageInput}, Height: ${heightInput}, Weight: ${weightInput}, Diet Type: ${selectedDietType}, Weight Goal: ${goalInput}, this is information of person , now based on this define a weekly diet plan , properly formatted.`;

    try {
      const response = await fetch(gpt35ApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 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',
        },
        body: JSON.stringify({
          prompt: prompt,
          model: 'text-davinci-003',
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error(`GPT-3.5 API request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('GPT-3.5 Response:', data.choices[0].text);
    } catch (error) {
      console.error('Error calling GPT-3.5 API:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} vertical={true}>
      <View style={styles.main}>
        <View style={styles.form}>
          <View style={styles.first1}>
            <View style={styles.group}>
              <Text style={styles.label}>Gender</Text>
              <Picker
                selectedValue={selectedGender}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGender(itemValue)
                }
                dropdownIconColor="black"
                dropdownIconRippleColor="black">
                <Picker.Item label="Male" value="male"  />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
            <View style={styles.group1}>
              <Text style={styles.label1}>Age </Text>
              <TextInput
                style={styles.input1}
                value={ageInput}
                onChangeText={text => setAgeValue(text)}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.sec}>
            <View style={styles.group}>
              <Text style={styles.label}>Height </Text>
              <TextInput
                style={styles.input2}
                value={heightInput}
                onChangeText={text => setHeightValue(text)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.group2}>
              <Text style={styles.label}>Weight </Text>
              <TextInput
                style={styles.input2}
                value={weightInput}
                onChangeText={text => setWeightValue(text)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Diet Type</Text>
            <Picker
              selectedValue={selectedDietType}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDietType(itemValue)
              }>
              <Picker.Item label="Vegetarian" value="vegetarian" />
              <Picker.Item label="Vegan" value="vegan" />
              <Picker.Item label="Keto" value="keto" />
            </Picker>
          </View>
          <View style={styles.group}>
            <Text style={styles.label}>Weight Goal </Text>
            <TextInput
              style={styles.input}
              value={goalInput}
              onChangeText={text => setGoalValue(text)}
            />
          </View>
          <Pressable style={styles.saveButton} onPress={handleSave}>
            <Text style={{color: 'white'}}>Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  main: {
    backgroundColor: 'black',
    width: '80%',
  },
  form: {
    padding: 16,
    borderRadius: 8,
  },
  group: {
    marginBottom: 16,
  },
  group1: {
    marginLeft: 30,
  },
  group2:{
    marginLeft:20,
  },
  first1: {
    flexDirection: 'row',
  },
  sec:{
    flexDirection:'row',
    marginTop:10,
  },
  label: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
  },
  label1: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 260,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 4,
  },
  input1: {
    height: 40,
    width: 170,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 4,
  },
  input2: {
    height: 40,
    width: 116,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 4,
  },
  picker: {
    height: 40,
    borderWidth: 1,
    color: 'black', // Set the text color to white
    backgroundColor: 'white',
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 16,
  },
});

export default BasicScreen;
