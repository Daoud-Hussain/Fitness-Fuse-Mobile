import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'; // Import AntDesign from react-native-vector-icons

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const onRatingChange = value => {
    setRating(value);
  };

  const onReviewChange = text => {
    setReview(text);
  };

  const onSendPress = () => {
    // Handle the send button press here
    console.log('Send button pressed');
    // Add your logic here to send the review or perform any other action
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.header}>
          <AntIcon name="leftcircle" size={24} color="white" />{' '}
          {/* Use AntIcon instead of AntDesign */}
          {/* <Text style={styles.heading}>Write a Review</Text> */}
          {/* Add an empty view for space */}
          <View style={{width: 24}}></View>
        </View>

        <View style={styles.barContainer}>
          {/* <View style={styles.ratingLabelContainer}>
            <Text style={styles.numberText}>{rating.toFixed(1)}</Text>
          </View> */}
          {/* <View style={styles.barImage}>
            <Text style={styles.ratingText}> Rating </Text>
            
          </View> */}
        </View>
        <View style={styles.reviewView}>
          <TextInput
            style={styles.reviewInput}
            placeholder="Review (Optional)"
            placeholderTextColor="white"
            multiline={true}
            value={review}
            onChangeText={onReviewChange}
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
          {/* <Text style={styles.sendButtonText}>Send</Text> */}
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  barContainer: {
    width: '100%',
    marginTop: 20,
    opacity: 15,
    borderRadius: 10,
    color: 'white',
  },
  ratingLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  barImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
  },
  reviewView: {
    marginTop: 20,
  },
  reviewInput: {
    width: '100%',
    padding: 10,
    height: 250,
    borderRadius: 10,
    backgroundColor: 'rgba(217, 217, 217, 0.15)',
    opacity: 15,
    color: 'white',
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  sendButton: {
    backgroundColor: 'rgba(155, 8, 8, 1)',
    width: '90%',
    height: 51.97,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReviewScreen;
