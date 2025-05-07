import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  // State for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to show a message
  const showMessage = () => {
    Alert.alert(
      "Hello!",
      "You pressed the message button!",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Interactive App</Text>

      {/* Counter Display */}
      <Text style={styles.counterText}>Counter: {count}</Text>

      {/* Increment Button */}
      <TouchableOpacity style={styles.button} onPress={incrementCounter}>
        <Text style={styles.buttonText}>Press to Count</Text>
      </TouchableOpacity>

      {/* Message Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Show Message"
          onPress={showMessage}
          color="#841584"
        />
      </View>

      <Text style={styles.expoText}>Powered by Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  counterText: {
    fontSize: 22,
    marginBottom: 20,
    color: '#555',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%', // Give the standard button a bit of width
  },
  expoText: {
    marginTop: 40,
    fontSize: 14,
    color: 'grey',
  },
});