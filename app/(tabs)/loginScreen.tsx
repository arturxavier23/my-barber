import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    setEmail('Digite seu email');
    setPassword('Digite sua senha');
  }, []);

  const handleLogin = () => {
    //@ts-ignore
    navigation.navigate('HomePage');
  };

  const handleRegister = () => {
     //@ts-ignore
    navigation.navigate('Cadastro');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gradientBackground}>
        <Text style={styles.title}>My Barber</Text>

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

        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Cadastrar</Text>
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
    backgroundColor: 'linear-gradient(#e66465, #9198e5)', // background cor
  },
  title: {
    fontFamily: 'Arial',
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    width: '90%',
    padding: 10,
    marginBottom: 20,
    borderColor: 'blue', 
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
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    backgroundColor: 'blue', 
    padding: 10,
    borderRadius: 24,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Arial',
  },
});