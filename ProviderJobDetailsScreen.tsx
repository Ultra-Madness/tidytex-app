import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useJobs, Job } from './JobContext';

// Add to RootStackParamList for navigation typing
 type RootStackParamList = {
   ProviderJobDetails: { jobId: string };
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.serviceType}</Text>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{job.address}</Text>
      <Text style={styles.label}>Date & Time:</Text>
      <Text style={styles.value}>{job.date} at {job.time}</Text>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{job.description}</Text>
      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{job.status}</Text>
      {/* TODO: Add customer info and navigation to maps */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
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
});
