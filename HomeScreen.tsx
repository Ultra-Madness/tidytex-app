import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Add navigation type
type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  CustomerDashboard: undefined;
  PostJob: undefined;
  JobHistory: undefined;
  CustomerProfile: undefined;
  JobConfirmation: undefined;
  ProviderDashboard: undefined;
  ProviderJobs: undefined;
  ProviderProfile: undefined;
  ProviderAcceptedJobs: undefined;
  ProviderCompletedJobs: undefined;
  ProviderJobDetails: { jobId: string };
};

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/splash-icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>TidyTex Home & Office Services</Text>
      </View>
      {/* Auth Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        {/* TEMPORARY: Direct login buttons for dev/testing, remove for production */}
        <TouchableOpacity style={[styles.button, styles.tempButton]} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'CustomerDashboard' }] })} accessibilityLabel="Dev: Direct Customer Login">
          <Text style={styles.buttonText}>[DEV] Customer Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.tempButton]} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'ProviderDashboard' }] })} accessibilityLabel="Dev: Direct Provider Login">
          <Text style={styles.buttonText}>[DEV] Provider Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
    backgroundColor: '#d1e7dd', // Soft green placeholder
    borderRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#38b6ff', // Soft blue
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    marginBottom: 16,
    width: 220,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  loginButton: {
    backgroundColor: '#43d9be', // Soft green
  },
  tempButton: {
    backgroundColor: '#bdbdbd',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
