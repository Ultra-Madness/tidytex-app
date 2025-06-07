import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the navigation stack type
 type RootStackParamList = {
   Home: undefined;
   SignUp: undefined;
   Login: undefined;
   CustomerDashboard: undefined;
   PostJob: undefined;
   JobHistory: undefined;
   CustomerProfile: undefined;
   JobConfirmation: undefined;
 };

export default function JobConfirmationScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Submitted!</Text>
      <Text style={styles.text}>Your job has been posted. Providers will be notified and can accept your request.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomerDashboard')}>
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f8',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38b6ff',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#38b6ff',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    width: 220,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
