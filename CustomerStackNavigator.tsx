import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerDashboardScreen from './CustomerDashboardScreen';
import PostJobScreen from './PostJobScreen';
import JobConfirmationScreen from './JobConfirmationScreen';
import JobHistoryScreen from './JobHistoryScreen';
import CustomerProfileScreen from './CustomerProfileScreen';

const Stack = createNativeStackNavigator();

export default function CustomerStackNavigator({ image, setImage }: { image: string | null, setImage: (uri: string | null) => void }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CustomerDashboard">
        {props => <CustomerDashboardScreen {...props} image={image} setImage={setImage} />}
      </Stack.Screen>
      <Stack.Screen name="PostJob" component={PostJobScreen} />
      <Stack.Screen name="JobConfirmation" component={JobConfirmationScreen} />
      <Stack.Screen name="JobHistory" component={JobHistoryScreen} />
      <Stack.Screen name="CustomerProfile">
        {props => <CustomerProfileScreen {...props} image={image} setImage={setImage} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
