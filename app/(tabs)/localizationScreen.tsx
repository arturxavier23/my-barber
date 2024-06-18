import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';

export default function localizationScreen() {
    const navigation = useNavigation();

      return (
        <ScrollView>
             <View style={styles.body}>     


            <Image
                source={require('@/assets/images/maps.png')}
                style={styles.image}
                />
            <ThemedText type="subtitle" lightColor='black'>Av. Brigadeiro Luís Antônio, 2294 - Bela Vista</ThemedText>

          </View>

        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      image: {
        width: 400,
        height: 200,
        marginBottom: 10,
      },
      body: {
        marginTop: 10,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
      }
    });