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
import UniversalBottomTabs from './UniversalBottomTabs';
import { AuthProvider, useAuth } from './AuthContext';
import MessagingScreen from './MessagingScreen';
import { RouteProp } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';

const Stack = createNativeStackNavigator();

// Add Messaging to RootStackParamList
type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  CustomerDashboard: undefined;
  PostJob: undefined;
  JobHistory: undefined;
  CustomerProfile: undefined;
  JobConfirmation: undefined;
  ProviderDashboard: undefined;
  ProviderJobs: undefined;
  ProviderProfile: undefined;
  ProviderAcceptedJobs: undefined;
  ProviderCompletedJobs: undefined;
  ProviderJobDetails: undefined;
  Messaging: { userRole: 'customer' | 'provider'; otherName: string };
};

export default function AppNavigator() {
  const { role, setRole } = useAuth();
  const [customerImage, setCustomerImage] = React.useState<string | null>(null);
  const [providerImage, setProviderImage] = React.useState<string | null>(null);

  // Listen for navigation to dashboard screens to set role
  const handleStateChange = (state: any) => {
    const route = state?.routes[state.index];
    if (route?.name === 'CustomerDashboard') setRole('customer');
    else if (route?.name === 'ProviderDashboard') setRole('provider');
  };

  return (
    <NavigationContainer onStateChange={handleStateChange}>
      {role ? (
        <MainStackNavigator
          role={role}
          customerImage={customerImage}
          setCustomerImage={setCustomerImage}
          providerImage={providerImage}
          setProviderImage={setProviderImage}
        />
      ) : (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="CustomerDashboard">
            {props => <CustomerDashboardScreen {...props} image={customerImage} setImage={setCustomerImage} />}
          </Stack.Screen>
          <Stack.Screen name="PostJob" component={PostJobScreen} />
          <Stack.Screen name="JobHistory" component={JobHistoryScreen} />
          <Stack.Screen name="CustomerProfile">
            {props => <CustomerProfileScreen {...props} image={customerImage} setImage={setCustomerImage} />}
          </Stack.Screen>
          <Stack.Screen name="JobConfirmation" component={JobConfirmationScreen} />
          <Stack.Screen name="ProviderDashboard">
            {props => <ProviderDashboardScreen {...props} image={providerImage} />}
          </Stack.Screen>
          <Stack.Screen name="ProviderJobs" component={ProviderJobsScreen} />
          <Stack.Screen name="ProviderProfile">
            {props => <ProviderProfileScreen {...props} image={providerImage} setImage={setProviderImage} />}
          </Stack.Screen>
          <Stack.Screen name="ProviderAcceptedJobs" component={ProviderAcceptedJobsScreen} />
          <Stack.Screen name="ProviderCompletedJobs" component={ProviderCompletedJobsScreen} />
          <Stack.Screen name="ProviderJobDetails" component={ProviderJobDetailsScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
