import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleLogin = () => {
    //@ts-ignore
    navigation.navigate('initialScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gradientBackground}>
      <ThemedText type="title">My Barber</ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.togglePassword}>
            {passwordVisible ? 'Ocultar senha' : 'Mostrar senha'}
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'linear-gradient(to right, #e66465, #9198e5)',
  },
  input: {
    width: '90%',
    padding: 10,
    marginBottom: 20,
    borderColor: 'black', 
    borderWidth: 2,
    borderRadius: 24,
    fontSize: 20,
    color: '#a5a5a5', 
  },
  togglePassword: {
    color: 'black', 
    marginBottom: 20,
  },
  forgotPassword: {
    color: 'black', 
    marginBottom: 40,
    alignSelf: 'flex-end',
    marginRight: '10%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  button: {
    backgroundColor: 'black', 
    padding: 10,
    borderRadius: 24,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});