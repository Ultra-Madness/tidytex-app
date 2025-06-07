import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useJobs } from './JobContext';

export default function ProviderAcceptedJobsScreen() {
  const { jobs, setJobs } = useJobs();
  const acceptedJobs = jobs.filter(job => job.status === 'Accepted' || job.status === 'In Progress');

  const handleStartJob = (id: string) => {
    const updatedJobs = jobs.map(job =>
      job.id === id ? { ...job, status: 'In Progress' } : job
    );
    setJobs(updatedJobs);
  };

  const handleCompleteJob = (id: string) => {
    const updatedJobs = jobs.map(job =>
      job.id === id ? { ...job, status: 'Completed' } : job
    );
    setJobs(updatedJobs);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accepted Jobs</Text>
      <FlatList
        data={acceptedJobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>{item.serviceType}</Text>
            <Text style={styles.jobDetail}>{item.address}</Text>
            <Text style={styles.jobDetail}>{item.date} at {item.time}</Text>
            <Text style={styles.jobDetail}>{item.description}</Text>
            <Text style={styles.jobStatus}>{item.status}</Text>
            {item.status === 'Accepted' && (
              <TouchableOpacity style={styles.actionButton} onPress={() => handleStartJob(item.id)}>
                <Text style={styles.actionButtonText}>Start Job</Text>
              </TouchableOpacity>
            )}
            {item.status === 'In Progress' && (
              <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#43d9be' }]} onPress={() => handleCompleteJob(item.id)}>
                <Text style={styles.actionButtonText}>Mark as Completed</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No accepted jobs yet.</Text>}
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
  jobStatus: {
    fontSize: 14,
    color: '#38b6ff',
    fontWeight: '600',
    marginTop: 6,
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: '#38b6ff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
