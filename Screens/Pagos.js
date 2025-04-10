import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CreditIcon from '../assets/credit.svg';
import MoneyIcon from '../assets/money.svg';
import TransferIcon from '../assets/transfer.svg';

const Pagos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Barra naranja con solo la flecha */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={styles.arrow} name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Título debajo de la barra */}
      <Text style={styles.title}>METODO DE PAGO</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>Seleccione su metodo de pago</Text>

      {/* Botones */}
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("MetodoPago")}>
        <MoneyIcon width={35} height={35} style={styles.svgIcon} fill="#4CAF50"/>
        <Text style={styles.optionText}>Efectivo</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Tarjeta")}>
        <CreditIcon width={35} height={35} style={styles.svgIcon} fill="#2196F3"/>
        <Text style={styles.optionText}>Tarjeta credito/debito</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <TransferIcon width={35} height={35} style={styles.svgIcon} fill="#9C27B0"/>
        <Text style={styles.optionText}>Transferencia</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Pagos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  arrow:{
    marginTop:15
  },
  topBar: {
    backgroundColor: '#ff7f1f',
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    color: '#ff7f1f',
    marginLeft:'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 20,
    marginLeft: 20,
    color: '#333',
    marginLeft:'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffc48d',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 25,
    marginTop:10,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  svgIcon: {
    marginRight: 10,
  },
});