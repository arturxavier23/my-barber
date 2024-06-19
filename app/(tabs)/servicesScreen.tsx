import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';

export default function servicesScreen() {
    const navigation = useNavigation();

    const navigateToChoicedService = (servico: string) => {
        //@ts-ignore
        navigation.navigate('datailedServiceScreen', { servico });
      };

      return (
        <ScrollView contentContainerStyle={styles.container}>
             <View style={styles.body}>     

            <TouchableOpacity style={styles.itemContainer} onPress={ () => navigateToChoicedService('Corte de cabelo')}>
                <Image
                    source={require('@/assets/images/img1.jpg')}
                    style={styles.image}
                    />
                <ThemedText type="title" lightColor='black'>Corte de cabelo</ThemedText>
            </TouchableOpacity>


            <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToChoicedService('Barba e bigode')}>
                <Image
                    source={require('@/assets/images/img2.jpg')}
                    style={styles.image}
                    />
                <ThemedText type="title" lightColor='black'>Barba e bigode</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToChoicedService('Lavagem')}>
                <Image
                    source={require('@/assets/images/img3.jpg')}
                    style={styles.image}
                    />
                <ThemedText type="title" lightColor='black'>Lavagem</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToChoicedService('Hidratação')}>
                <Image
                    source={require('@/assets/images/img4.jpg')}
                    style={styles.image}
                    />
                <ThemedText type="title" lightColor='black'>Hidratação</ThemedText>
            </TouchableOpacity>

          </View>

        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '80%',
        justifyContent: 'center',
    },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
      },
      body: {
        width: '100%',
        alignItems: 'center',
      }
    });