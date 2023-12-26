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

const ReviewScreen = () => {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const onRatingChange = text => {
    const parsedRating = parseFloat(text);
    if (!isNaN(parsedRating) && parsedRating >= 0 && parsedRating <= 5) {
      setRating(text);
    }
  };

  const onReviewChange = text => {
    setReview(text);
  };

  const onSendPress = () => {
    console.log('Send button pressed');
    console.log('Entered Rating:', rating);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.header}>
          <Text style={styles.heading}>Write a Review</Text>
          <View style={{width: 24}}></View>
        </View>

        <View style={styles.barContainer}>
          <View style={styles.ratingLabelContainer}>
            <Text style={styles.numberText}>{rating}</Text>
          </View>
          <View style={styles.barImage}>
            <TextInput
              style={styles.ratingInput}
              placeholder="Rating (1.0 - 5.0)"
              placeholderTextColor="white"
              keyboardType="numeric"
              value={rating}
              onChangeText={onRatingChange}
              backgroundColor="rgba(217, 217, 217, 0.15)"
            />
          </View>
        </View>
        <View style={styles.reviewView}>
          <TextInput
            style={styles.reviewInput}
            placeholder="Review Message "
            placeholderTextColor="white"
            multiline={true}
            value={review}
            onChangeText={onReviewChange}
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
          <Text style={styles.sendButtonText}>Send</Text>
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
    justifyContent: 'center',
    marginTop: 10,
  },
  ratingText: {
    color: 'white',
    marginRight: 10,
  },
  ratingInput: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(217, 217, 217, 0.15)',
    opacity: 15,
    color: 'white',
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  reviewView: {
    marginTop: 20,
  },
  reviewInput: {
    width: '100%',
    padding: 15,
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
