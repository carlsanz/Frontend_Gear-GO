import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function RegistroD() {

    const [selectedValue, setSelectedValue] = useState("");
     const navigation = useNavigation();
    
  
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
            placeholder="Dirección"
          />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
        />
            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              secureTextEntry={true}
            />

            
            {/* Lista Desplegable */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="DNI" value="DNI" />
          <Picker.Item label="Pasaporte" value="Pasaporte" />
          <Picker.Item label="Licencia de conducir" value="Licencia" />
        </Picker>
      </View>

             <TouchableOpacity style={styles.botonContinuar}>
              <Text style={styles.textoBoton} onPress={() => navigation.navigate("RegistroId")}>Continuar</Text>
            </TouchableOpacity>
         
          
        
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
    botonContinuar: {
      marginTop: 10,
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
    pickerContainer: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: "center",
      },
      picker: {
        height: 50,
        width: "100%",
        color: "#000", // Color del texto dentro del Picker
      },
  });
  