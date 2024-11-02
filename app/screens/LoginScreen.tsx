import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import { NavigationProp, RootParamList } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === 'admin' && password === 'password') {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      (navigation as NavigationProp<RootParamList>).replace('(tabs)'); 
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginBottom: 20,}}>
        <Text>Cancel</Text><Text style={styles.greyText}>Don't have an account </Text>
      </View>
      <View style={{marginBottom: 20,}}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.greyText}>Enter your email and password to login</Text>
      </View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleLogin}>
          Login
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7', // Light background for contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333', // Neutral color for title
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#32CD32',
    color: 'white',
    alignItems: 'center',
    padding: 10,
     // Replace with your primary color
  },
  greyText:{
    color: 'grey',
    fontWeight:'bold',
  }
});
