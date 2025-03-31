import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Bienvenido() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/naranja2.png')}
          style={styles.logo}
        />
        <Text style={styles.textoPrincipal}>Registro completado con éxito.</Text>
        <Text style={styles.textoBienvenido}>¡Bienvenido!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7F11",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    position: 'absolute',
    top:80,
    marginBottom: 0,
  },
  textoPrincipal: {
    color: "white",
    fontSize: 20,
    fontFamily: 'Montserrat_400Regular',
    textAlign: "center",
    marginBottom: 10,
    marginTop:140
  
  },
  textoBienvenido: {
    color: "white",
    fontSize: 40,
    fontFamily: 'Montserrat_300Light',
    textAlign: "center",
    fontWeight: 'bold'
  },
});