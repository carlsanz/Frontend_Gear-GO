import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IngresarTarjeta = () => {
  const [guardarTarjeta, setGuardarTarjeta] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" style={styles.flecha}/>
        </TouchableOpacity>
      </View>

      {/* Título */}
      <Text style={styles.title}>INGRESE SU TARJETA</Text>

      {/* Contenedor blanco */}
      <View style={styles.cardBox}>
        <TextInput style={styles.input} placeholder="Nombre de propietario" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Numero de tarjeta" placeholderTextColor="#999" keyboardType="number-pad" />

        <View style={styles.row}>
          <TextInput style={[styles.input, styles.dateInput]} placeholder="/" placeholderTextColor="#999" keyboardType="number-pad" />
          <TextInput style={[styles.input, styles.cvvInput]} placeholder="CVV" placeholderTextColor="#999" keyboardType="number-pad" />
        </View>
      </View>

      {/* Checkbox personalizado */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setGuardarTarjeta(!guardarTarjeta)}
      >
        <Ionicons
          name={guardarTarjeta ? 'checkbox' : 'square-outline'}
          size={24}
          color="#FF8000"
        />
        <Text style={styles.checkboxLabel}>Guardar los datos de la tarjeta</Text>
      </TouchableOpacity>

      {/* Botón confirmar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IngresarTarjeta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    backgroundColor: '#FF8000',
    height: 80,
    justifyContent: 'center',
    
   
  },
  flecha:{
    marginLeft:15,
    marginTop:15,
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardBox: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    elevation: 3,
    borderRadius: 8,
    marginTop:40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF8000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 1,
    marginRight: 10,
  },
  cvvInput: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    marginTop:20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: 'black',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    elevation: 3,
    marginTop:30
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
