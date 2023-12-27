import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button  } from 'react-native';



const AdvanceScreen = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bodyText}>This is advance screen </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
  
  

export default AdvanceScreen;
