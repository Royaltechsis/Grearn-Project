import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function VerifyCard() {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState('');

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handlePinChange = (index: number, value: string) => {
    // Allow only digits and set error message for invalid input
    if (/^\d$/.test(value) || value === '') {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      setError('');

      // Move to the next input if the value is a digit
      if (value !== '' && index < pin.length - 1) {
        // Automatically focus on the next input
        setTimeout(() => {
          const nextInput = document.getElementById(`pin-input-${index + 1}`);
          if (nextInput) nextInput.focus();
        }, 0);
      }
    } else {
      setError('Please enter only digits.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Verify your card</Text>
        <Text style={styles.subHeader}>
          Please enter the 6 digits pin that was sent to 09051787913
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Enter the 6-digit PIN:</Text>
        <View style={styles.pinContainer}>
          {pin.map((digit, index) => (
            <TextInput
              key={index}
              id={`pin-input-${index}`} // Add id for input focus
              style={styles.pinInput}
              value={digit}
              onChangeText={(value) => handlePinChange(index, value)}
              maxLength={1} // Only allow one digit per box
              keyboardType="numeric" // Numeric keyboard
            />
          ))}
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <Text style={styles.resendText}>Click resend if you didn't get the pin</Text>
      <Link href='./#' style={styles.resendLink}>Resend</Link>
      <View style={styles.countdownContainer}>
        <Text style={styles.countdownText}>{countdown > 0 ? `${countdown}s` : 'Resend available'}</Text>
      </View>
      <Link href='./#' style={styles.button}>Save</Link>
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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinInput: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  resendText: {
    marginTop: 20,
  },
  resendLink: {
    color: '#6CBC37',
    marginVertical: 10,
  },
  countdownContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  countdownText: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    backgroundColor: '#6CBC37',
    color: 'white',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 20,
    textAlign: 'center', // Center the button text
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});
