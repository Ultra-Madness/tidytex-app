import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useJobs } from './JobContext';

export default function JobHistoryScreen() {
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
});
