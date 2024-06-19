import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export default function datailedServiceScreen() {
    const navigation = useNavigation();
    const { servico } = useLocalSearchParams();

    const navigateToHome = () => {
        //@ts-ignore
        navigation.navigate('initialScreen');
      };

    const getServiceValue = (servico: string) => {
        const services = [
          { name: 'Corte de cabelo', value: 30 },
          { name: 'Barba e bigode', value: 20 },
          { name: 'Lavagem', value: 15 },
          { name: 'Hidratação', value: 25 },
        ];
      
        const foundService = services.find(s => s.name === servico);
        return foundService ? foundService.value : 0;
      };

      //@ts-ignore
      const value = getServiceValue(servico);
      const [date, setDate] = useState(new Date());
      const [show, setShow] = useState(false);
    
      const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showDatePicker = () => {
        setShow(true);
      };
    
      const handleSchedule = () => {
        alert(`Serviço: ${servico}\nValor: R$${value}\nData Agendada: ${date.toLocaleDateString()}`);
        navigateToHome();
      };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviço Selecionado</Text>
      <Text style={styles.service}>{servico}</Text>
      <Text style={styles.value}>Valor: R$ {value}</Text>
        <View style={styles.dateContainer}>
        <Button onPress={showDatePicker} title="Selecionar Data" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={styles.dateText}>Data Selecionada: {date.toLocaleDateString()}</Text>
      </View>
      <Button onPress={handleSchedule} title="Agendar" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    service: {
      fontSize: 18,
      marginBottom: 10,
    },
    value: {
      fontSize: 18,
      marginBottom: 20,
    },
    dateContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    dateText: {
      fontSize: 16,
      marginTop: 10,
    },
  });
