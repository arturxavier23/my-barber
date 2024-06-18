import { Stack, Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
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
      <Stack.Screen name='localizationScreen' options={{ title: 'Localização', headerTitleAlign: 'center'}}/>
    </Stack>
  );
}
