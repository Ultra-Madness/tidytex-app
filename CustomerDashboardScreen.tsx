import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from './AuthContext';

// Define the navigation stack type
type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  CustomerDashboard: undefined;
  PostJob: undefined;
  JobHistory: undefined;
  CustomerProfile: undefined;
};

// Accept image and setImage as props
export default function CustomerDashboardScreen({ image, setImage }: { image: string | null, setImage: (uri: string | null) => void }) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}} accessibilityLabel="Profile image (change in profile)">
        <Image
          source={image ? { uri: image } : require('./assets/splash-icon.png')}
          style={styles.profileImage}
          accessibilityLabel="Profile image preview"
        />
      </TouchableOpacity>
      <Text style={styles.text}>Customer Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PostJob')}>
        <Text style={styles.buttonText}>Post a Job</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JobHistory')}>
        <Text style={styles.buttonText}>Job History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomerProfile')}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={logout} accessibilityLabel="Log out">
        <Text style={styles.buttonText}>Log Out</Text>
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
  },
  text: {
    fontSize: 22,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#38b6ff',
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
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#e57373', // Soft red
    marginTop: 16,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: 'center',
    marginBottom: 8,
    borderWidth: 3,
    borderColor: '#43d9be',
    backgroundColor: '#e0f7fa',
  },
});
