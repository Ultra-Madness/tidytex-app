import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useJobs, Job } from './JobContext';

// Add to RootStackParamList for navigation typing
 type RootStackParamList = {
   ProviderJobDetails: { jobId: string };
   Messaging: { userRole: 'customer' | 'provider'; otherName: string };
   // ...other screens
 };

export default function ProviderJobDetailsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const { jobs } = useJobs();
  // @ts-ignore
  const { jobId } = route.params || {};
  const job: Job | undefined = jobs.find(j => j.id === jobId);

  if (!job) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Job Not Found</Text>
      </View>
    );
  }

  // Placeholder customer info (to be replaced with real data from backend)
  const customerInfo = {
    name: 'Jane Doe',
    phone: '(555) 123-4567',
    address: job.address,
  };

  // Open address in Google Maps
  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.address)}`;
    // @ts-ignore
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    } else {
      // For React Native, use Linking
      import('react-native').then(({ Linking }) => Linking.openURL(url));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.serviceType}</Text>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{job.address}</Text>
      <TouchableOpacity style={styles.mapButton} onPress={openInMaps} accessibilityLabel="Open address in maps">
        <Text style={styles.mapButtonText}>Open in Maps</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Date & Time:</Text>
      <Text style={styles.value}>{job.date} at {job.time}</Text>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{job.description}</Text>
      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{job.status}</Text>
      <View style={styles.customerSection}>
        <Text style={styles.label}>Customer Info:</Text>
        <Text style={styles.value}>Name: {customerInfo.name}</Text>
        <Text style={styles.value}>Phone: {customerInfo.phone}</Text>
        <Text style={styles.value}>Address: {customerInfo.address}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.getParent()?.navigate('Messaging', { jobId: job.id, userRole: 'provider', customerName: customerInfo.name, providerName: 'Provider' })} accessibilityLabel="Open chat with customer">
        <Text style={styles.buttonText}>Message Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} accessibilityLabel="Go back">
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: '#43d9be',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#222',
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#38b6ff',
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 32,
    width: 220,
    alignItems: 'center',
    alignSelf: 'center',
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
  mapButton: {
    backgroundColor: '#43d9be',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  customerSection: {
    backgroundColor: '#e6f7f4',
    borderRadius: 10,
    padding: 12,
    marginTop: 18,
    marginBottom: 8,
  },
});
