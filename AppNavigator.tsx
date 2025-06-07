import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import CustomerDashboardScreen from './CustomerDashboardScreen';
import PostJobScreen from './PostJobScreen';
import JobHistoryScreen from './JobHistoryScreen';
import CustomerProfileScreen from './CustomerProfileScreen';
import JobConfirmationScreen from './JobConfirmationScreen';
import ProviderDashboardScreen from './ProviderDashboardScreen';
import ProviderJobsScreen from './ProviderJobsScreen';
import ProviderProfileScreen from './ProviderProfileScreen';
import ProviderAcceptedJobsScreen from './ProviderAcceptedJobsScreen';
import ProviderCompletedJobsScreen from './ProviderCompletedJobsScreen';
import ProviderJobDetailsScreen from './ProviderJobDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CustomerDashboard" component={CustomerDashboardScreen} />
        <Stack.Screen name="PostJob" component={PostJobScreen} />
        <Stack.Screen name="JobHistory" component={JobHistoryScreen} />
        <Stack.Screen name="CustomerProfile" component={CustomerProfileScreen} />
        <Stack.Screen name="JobConfirmation" component={JobConfirmationScreen} />
        <Stack.Screen name="ProviderDashboard" component={ProviderDashboardScreen} />
        <Stack.Screen name="ProviderJobs" component={ProviderJobsScreen} />
        <Stack.Screen name="ProviderProfile" component={ProviderProfileScreen} />
        <Stack.Screen name="ProviderAcceptedJobs" component={ProviderAcceptedJobsScreen} />
        <Stack.Screen name="ProviderCompletedJobs" component={ProviderCompletedJobsScreen} />
        <Stack.Screen name="ProviderJobDetails" component={ProviderJobDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
