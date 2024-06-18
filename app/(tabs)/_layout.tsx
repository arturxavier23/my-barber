import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#121212'
      },
      headerTintColor: '#FFF'
    }}>
      <Stack.Screen name='loginScreen'  options={{ title: 'Login', headerTitleAlign: 'center'}}/> 
      <Stack.Screen name='initialScreen' options={{ title: 'Home', headerTitleAlign: 'center'}}/>
      <Stack.Screen name='servicesScreen' options={{ title: 'Serviços', headerTitleAlign: 'center'}}/>
    </Stack>
  );
}
