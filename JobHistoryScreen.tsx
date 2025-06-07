import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useJobs } from './JobContext';

type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  CustomerDashboard: undefined;
  PostJob: undefined;
  JobHistory: undefined;
  CustomerProfile: undefined;
  JobConfirmation: undefined;
  Messaging: { userRole: 'customer' | 'provider'; otherName: string };
};

export default function JobHistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { jobs } = useJobs();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job History</Text>
      <FlatList
        data={jobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>{item.serviceType}</Text>
            <Text style={styles.jobDetail}>{item.address}</Text>
            <Text style={styles.jobDetail}>{item.date} at {item.time}</Text>
            <Text style={styles.jobDetail}>{item.description}</Text>
            <Text style={styles.jobStatus}>{item.status}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.getParent()?.navigate('Messaging', { jobId: item.id, userRole: 'customer', customerName: 'Customer', providerName: 'Provider' })} accessibilityLabel="Open chat with provider">
              <Text style={styles.buttonText}>Message Provider</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No jobs found.</Text>}
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
    color: '#38b6ff',
    marginBottom: 4,
  },
  jobDetail: {
    fontSize: 15,
    color: '#333',
    marginBottom: 2,
  },
  jobStatus: {
    fontSize: 14,
    color: '#43d9be',
    fontWeight: '600',
    marginTop: 6,
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#38b6ff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
