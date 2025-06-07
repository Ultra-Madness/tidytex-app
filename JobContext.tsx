import React, { createContext, useContext, useState } from 'react';

export type Job = {
  id: string;
  serviceType: string;
  address: string;
  date: string;
  time: string;
  description: string;
  status: string;
};

// Add setJobs to JobContextType and JobProvider
interface JobContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id' | 'status'>) => void;
  setJobs: (jobs: Job[]) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const addJob = (job: Omit<Job, 'id' | 'status'>) => {
    setJobs(prev => [
      {
        ...job,
        id: Date.now().toString(),
        status: 'Pending',
      },
      ...prev,
    ]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error('useJobs must be used within a JobProvider');
  return context;
};
