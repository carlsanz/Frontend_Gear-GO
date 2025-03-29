import { StatusBar } from 'expo-status-bar';
import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import NaranjaSVG from "../assets/naranja.svg";
import MailSVG from "../assets/mail.svg"; 
import SmsSVG from "../assets/sms.svg"; 
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Registro() {

   const navigation = useNavigation();
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);

  const handleChange = (text, index) => {
    if (text.length <= 1) {
      let newCodigo = [...codigo];
      newCodigo[index] = text;
      setCodigo(newCodigo);
    }
  };

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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Sección Naranja con SVG */}
        <View style={styles.header}>
          <Image
            source={require('../assets/naranja2.png')}
            style={styles.imageNaranja}
          />
          <Text style={styles.textoRegistro}>Registro</Text>
        </View>

        {/* Contenido Blanco con TextInputs */}
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
          />
          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
          />

          <Text style={styles.textoCodigo}>Recibirás un código de confirmación</Text>       
          <Text style={styles.textoCodigo}>¿Dónde quieres recibirlo?</Text>

          {/* Contenedor de los botones tipo icono */}
          <View style={styles.opciones}>
            <TouchableOpacity style={styles.botonOpcion} onPress={() => console.log("Código por SMS")}>
              <SmsSVG width={50} height={50} fill="#FF7F11" />
              <Text style={styles.textoOpcion}>SMS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonOpcion} onPress={() => console.log("Código por Correo")}>
              <MailSVG width={50} height={50} fill="#FF7F11" />
              <Text style={styles.textoOpcion}>Correo</Text>
            </TouchableOpacity>
          </View>

          {/* Código de verificación */}
          <View style={{ marginTop: 10, alignItems: "center", width: "100%" }}>
            <Text style={styles.title}>Ingresa el código</Text>
            <View style={styles.inputContainer}>
              {codigo.map((num, index) => (
                <TextInput
                  key={index}
                  style={styles.inputCodigo}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(text) => handleChange(text, index)}
                  value={num}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.botonContinuar}>
              <Text style={styles.textoBoton} onPress={() => navigation.navigate("RegistroD")} >Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    height: 400,
    backgroundColor: "#FF7F11",
  },
  body: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  textoRegistro: {
    color: "white",
    fontSize: 42,
    marginTop: 16,
    position: "absolute",
    top: 320,
    left: '25%', 
    fontFamily: 'Montserrat_300Light', 
  },
  imageNaranja: {
    position: "absolute",
    left: -65,
    bottom: -55,
  },
  textoCodigo: {
    fontSize: 15,
    marginTop: 10,
  },
  opciones: {
    flexDirection: "row",
    marginTop: 20,
    gap: 30,
  },
  botonOpcion: {
    alignItems: "center",
  },
  textoOpcion: {
    marginTop: 5,
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputCodigo: {
    width: 45,
    height: 50,
    borderWidth: 2,
    borderColor: "#FF7F11",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
  botonContinuar: {
    marginTop: 30,
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  textoBoton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});


