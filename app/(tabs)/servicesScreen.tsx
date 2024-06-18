import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';

export default function servicesScreen() {
    const navigation = useNavigation();

      return (
        <ScrollView contentContainerStyle={styles.container}>
             <View style={styles.body}>     


            <Image
                source={require('@/assets/images/img1.jpg')}
                style={styles.image}
                />
            <ThemedText type="title" lightColor='black'>Corte de cabelo</ThemedText>

            <Image
                source={require('@/assets/images/img2.jpg')}
                style={styles.image}
                />
            <ThemedText type="title" lightColor='black'>Barba e bigode</ThemedText>

            <Image
                source={require('@/assets/images/img3.jpg')}
                style={styles.image}
                />
            <ThemedText type="title" lightColor='black'>Lavagem</ThemedText>

            <Image
                source={require('@/assets/images/img4.jpg')}
                style={styles.image}
                />
            <ThemedText type="title" lightColor='black'>Hidratação</ThemedText>

          </View>

        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
   
      },
      header: {
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      image: {
        width: 100,
        height: 100,
      },
      body: {
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
      }
    });