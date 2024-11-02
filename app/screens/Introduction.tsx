import React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function Introduction() {
  const sliderData = [
    { id: '1', uri: 'https://via.placeholder.com/300' },
    { id: '2', uri: 'https://via.placeholder.com/300' },
    { id: '3', uri: 'https://via.placeholder.com/300' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.sliderItem}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.sliderContainer}>
          <Carousel
            data={sliderData}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={250}
            loop={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  innerContainer: {
    width: '90%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  sliderContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  sliderItem: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0066CC', // Replace with your primary color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
