import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      /* @tutinfo Add <CODE>Stack.Screen</CODE> component with <CODE>options</CODE> prop to update the title of <CODE>+not-found</CODE> route. */
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        /* @tutinfo Adding a fallback route allows the user to navigate to that screen. Here, the fallback route is Home screen. */
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
