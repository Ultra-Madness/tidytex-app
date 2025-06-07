import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useJobs } from './JobContext';

export default function ProviderCompletedJobsScreen() {
  const { jobs } = useJobs();
  // For demo, earnings are calculated as a flat rate per job
  const completedJobs = jobs.filter(job => job.status === 'Completed');
  const earningPerJob = 100; // USD, placeholder
  const totalEarnings = completedJobs.length * earningPerJob;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Jobs</Text>
      <Text style={styles.earnings}>Total Earnings: ${totalEarnings}</Text>
      <FlatList
        data={completedJobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>{item.serviceType}</Text>
            <Text style={styles.jobDetail}>{item.address}</Text>
            <Text style={styles.jobDetail}>{item.date} at {item.time}</Text>
            <Text style={styles.jobDetail}>{item.description}</Text>
            <Text style={styles.jobStatus}>Completed</Text>
            <Text style={styles.earning}>Earnings: ${earningPerJob}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No completed jobs yet.</Text>}
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
    marginBottom: 12,
    textAlign: 'center',
  },
  earnings: {
    fontSize: 18,
    color: '#43d9be',
    fontWeight: 'bold',
    marginBottom: 20,
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
  jobStatus: {
    fontSize: 14,
    color: '#38b6ff',
    fontWeight: '600',
    marginTop: 6,
    marginBottom: 6,
  },
  earning: {
    fontSize: 15,
    color: '#222',
    fontWeight: 'bold',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
  },
});
