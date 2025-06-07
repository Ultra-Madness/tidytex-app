import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UniversalBottomTabs from './UniversalBottomTabs';
import MessagingScreen from './MessagingScreen';
import { RouteProp } from '@react-navigation/native';

export type MainStackParamList = {
  Tabs: undefined;
  Messaging: { userRole: 'customer' | 'provider'; otherName: string };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStackNavigator(props: any) {
  // Pass all props to UniversalBottomTabs for image sync, etc.
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs">
        {() => <UniversalBottomTabs {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Messaging">
        {({ route }: { route: RouteProp<MainStackParamList, 'Messaging'> }) => (
          <MessagingScreen userRole={route.params.userRole} otherName={route.params.otherName} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
