import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';

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
};

// Accept image and setImage as props
export default function CustomerProfileScreen({ image, setImage }: { image: string | null, setImage: (uri: string | null) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSave = () => {
    // For now, just show a confirmation
    Alert.alert('Profile Saved', 'Your profile information has been updated.', [
      { text: 'OK', onPress: () => navigation.navigate('CustomerDashboard') }
    ]);
  };

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert('Permission to access media library is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} accessibilityLabel="Pick a profile image">
        <Image
          source={image ? { uri: image } : require('./assets/splash-icon.png')}
          style={styles.profileImage}
          accessibilityLabel="Profile image preview"
        />
        <Text style={styles.uploadText}>Tap to change photo</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
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
    fontSize: 22,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d1e7dd',
  },
  button: {
    backgroundColor: '#38b6ff',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    marginTop: 8,
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
  uploadText: {
    color: '#43d9be',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 15,
  },
});
