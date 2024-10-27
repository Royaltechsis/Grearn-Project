import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function CardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please enter your card details</Text>
      <Text style={styles.subHeader}>
        By providing your card information, you authorize Grearn to bind your card in accordance with Grearn terms and conditions.
      </Text>

      {/* Card Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />

      {/* CVV and Expiry Date Input in a Row */}
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.halfInput}
          placeholder="Expiry Date (MM/YY)"
          value={expiryDate}
          onChangeText={setExpiryDate}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.halfInput}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
        />
      </View>

      {/* Save Button */}
      <Link href="./verifyCard" style={styles.button}><Text>save</Text></Link>

      <Pressable>
        {/* <Text onPress={() => alert('Card details saved!')} style={styles.button}>Save</Text> */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  halfInput: {
    height: 50,
    width: '48%', // Adjust the width to create space between inputs
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button:{
    backgroundColor : '#6CBC37',
    color: 'white',
    width : '90%',
    padding : 10,
    borderRadius : 10,
    alignSelf : 'center',
    margin: 20,
    textAlign : 'center',
    fontWeight : 'bold'
  }
});
