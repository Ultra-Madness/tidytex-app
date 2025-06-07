import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useJobs } from './JobContext';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MessagingScreen from './MessagingScreen';

// Add ProviderJobDetails to RootStackParamList
type RootStackParamList = {
  ProviderDashboard: undefined;
  ProviderJobs: undefined;
  ProviderProfile: undefined;
  ProviderAcceptedJobs: undefined;
  ProviderCompletedJobs: undefined;
  ProviderJobDetails: { jobId: string };
  Messaging: { userRole: 'customer' | 'provider'; otherName: string };
};

export default function ProviderJobsScreen() {
  const { jobs, setJobs } = useJobs();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // For now, show all jobs with status 'Pending'
  const availableJobs = jobs.filter(job => job.status === 'Pending');

  const handleAccept = (id: string) => {
    // Update job status to 'Accepted'
    const updatedJobs = jobs.map(job =>
      job.id === id ? { ...job, status: 'Accepted' } : job
    );
    setJobs(updatedJobs);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Jobs</Text>
      <FlatList
        data={availableJobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>{item.serviceType}</Text>
            <Text style={styles.jobDetail}>{item.address}</Text>
            <Text style={styles.jobDetail}>{item.date} at {item.time}</Text>
            <Text style={styles.jobDetail}>{item.description}</Text>
            <TouchableOpacity style={styles.acceptButton} onPress={() => handleAccept(item.id)}>
              <Text style={styles.acceptButtonText}>{item.status === 'Accepted' ? 'Accepted' : 'Accept Job'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.acceptButton, { backgroundColor: '#43d9be', marginTop: 8 }]} onPress={() => navigation.navigate('ProviderJobDetails', { jobId: item.id })}>
              <Text style={styles.acceptButtonText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.acceptButton, { backgroundColor: '#bdbdbd', marginTop: 8 }]} onPress={() => navigation.getParent()?.navigate('Messaging', { jobId: item.id, userRole: 'provider', customerName: 'Jane Doe', providerName: 'Provider' })} accessibilityLabel="Open chat with customer">
              <Text style={styles.acceptButtonText}>Message Customer</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No available jobs.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 24,
  },
  title: {
    fontSize: 22,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#43d9be',
    marginBottom: 4,
  },
  jobDetail: {
    fontSize: 15,
    color: '#333',
    marginBottom: 2,
  },
  acceptButton: {
    backgroundColor: '#38b6ff',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
  },
});
