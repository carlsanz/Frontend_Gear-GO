import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Svg, Circle, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const MetodoPago = () => {
  // 🔥 Datos quemados por ahora
  const metodoPago = 'efectivo'; // 'efectivo' o 'tarjeta'
  const monto = 250;

  const esEfectivo = metodoPago === 'efectivo';

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botón de regreso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>TRANSACCION CONFIRMADA</Text>

      {/* Icono de check */}
      <Svg width={250} height={250} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" marginTop="35">
        <Circle cx="12" cy="12" r="10" />
        <Path d="M16 8l-5.5 5.5L8 11" />
      </Svg>

      {/* Texto de pago */}
      <View style={styles.messageContainer}>
        {esEfectivo && (
          <Text style={styles.text}>Realice el pago contra entrega</Text>
        )}
        <Text style={styles.text}>
          {esEfectivo ? 'Monto a pagar' : 'Monto pagado'}: L.{monto}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8000',
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 16,
  },
  messageContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});

export default MetodoPago;
