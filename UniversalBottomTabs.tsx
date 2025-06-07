import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import JobHistoryScreen from './JobHistoryScreen';
import CustomerProfileScreen from './CustomerProfileScreen';
import ProviderDashboardScreen from './ProviderDashboardScreen';
import ProviderJobsScreen from './ProviderJobsScreen';
import ProviderAcceptedJobsScreen from './ProviderAcceptedJobsScreen';
import ProviderCompletedJobsScreen from './ProviderCompletedJobsScreen';
import ProviderProfileScreen from './ProviderProfileScreen';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import CustomerStackNavigator from './CustomerStackNavigator';

const Tab = createBottomTabNavigator();

// Universal bottom tab navigator for both roles
export default function UniversalBottomTabs({ role, customerImage, setCustomerImage, providerImage, setProviderImage }: {
  role: 'customer' | 'provider',
  customerImage?: string | null,
  setCustomerImage?: (uri: string | null) => void,
  providerImage?: string | null,
  setProviderImage?: (uri: string | null) => void
}) {
  // Tabs for customer
  if (role === 'customer') {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#38b6ff',
          tabBarInactiveTintColor: '#aaa',
          tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0.5, borderTopColor: '#e0e0e0' },
          tabBarIcon: ({ color, size, focused }) => {
            if (route.name === 'CustomerDashboardStack' && customerImage) {
              return <Image source={{ uri: customerImage }} style={{ width: size, height: size, borderRadius: size / 2, borderWidth: focused ? 2 : 0, borderColor: focused ? '#38b6ff' : 'transparent' }} />;
            }
            let iconName = 'home';
            if (route.name === 'CustomerDashboardStack') iconName = 'home';
            else if (route.name === 'JobHistory') iconName = 'list';
            else if (route.name === 'CustomerProfile') iconName = 'person';
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="CustomerDashboardStack" options={{ tabBarLabel: 'Home' }}>
          {() => <CustomerStackNavigator image={customerImage!} setImage={setCustomerImage!} />}
        </Tab.Screen>
        <Tab.Screen name="JobHistory" component={JobHistoryScreen} options={{ tabBarLabel: 'Jobs' }} />
        <Tab.Screen name="CustomerProfile">
          {props => <CustomerProfileScreen {...props} image={customerImage!} setImage={setCustomerImage!} />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
  // Tabs for provider
  if (role === 'provider') {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#43d9be',
          tabBarInactiveTintColor: '#aaa',
          tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0.5, borderTopColor: '#e0e0e0' },
          tabBarIcon: ({ color, size, focused }) => {
            if (route.name === 'ProviderProfile' && providerImage) {
              return <Image source={{ uri: providerImage }} style={{ width: size, height: size, borderRadius: size / 2, borderWidth: focused ? 2 : 0, borderColor: focused ? '#43d9be' : 'transparent' }} />;
            }
            let iconName = 'briefcase';
            if (route.name === 'ProviderDashboard') iconName = 'home';
            else if (route.name === 'ProviderJobs') iconName = 'search';
            else if (route.name === 'ProviderAcceptedJobs') iconName = 'checkmark-done';
            else if (route.name === 'ProviderCompletedJobs') iconName = 'trophy';
            else if (route.name === 'ProviderProfile') iconName = 'person';
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="ProviderDashboard">
          {props => <ProviderDashboardScreen {...props} image={providerImage!} />}
        </Tab.Screen>
        <Tab.Screen name="ProviderJobs" component={ProviderJobsScreen} options={{ tabBarLabel: 'Jobs' }} />
        <Tab.Screen name="ProviderAcceptedJobs" component={ProviderAcceptedJobsScreen} options={{ tabBarLabel: 'Accepted' }} />
        <Tab.Screen name="ProviderCompletedJobs" component={ProviderCompletedJobsScreen} options={{ tabBarLabel: 'Completed' }} />
        <Tab.Screen name="ProviderProfile">
          {props => <ProviderProfileScreen {...props} image={providerImage!} setImage={setProviderImage!} />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
  return null;
}
