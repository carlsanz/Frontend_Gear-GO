import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker'; // Importamos ImagePicker
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Importamos íconos

export default function RegistroId() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_300Light,
  });

  // Estado para las imágenes seleccionadas
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  // Función para seleccionar la imagen 1
  const pickImage1 = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage1(result.uri); // Guardar la imagen seleccionada en el estado
    }
  };

  // Función para seleccionar la imagen 2
  const pickImage2 = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage2(result.uri); // Guardar la imagen seleccionada en el estado
    }
  };

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
          <Text style={styles.textoRegistro}>Identificación</Text>
        </View>

        {/* Imagen 1 seleccionada */}
        {image1 && (
          <Image source={{ uri: image1 }} style={styles.selectedImage} />
        )}

        {/* Botón para seleccionar la imagen 1 */}
        <TouchableOpacity style={styles.botonCargarImagen} onPress={pickImage1}>
          <MaterialIcons name="photo-library" size={30} color="white" /> 
          <Text style={styles.textoBoton}>Cargar Imagen 1</Text>
        </TouchableOpacity>

        {/* Imagen 2 seleccionada */}
        {image2 && (
          <Image source={{ uri: image2 }} style={styles.selectedImage} />
        )}

        {/* Botón para seleccionar la imagen 2 */}
        <TouchableOpacity style={styles.botonCargarImagen} onPress={pickImage2}>
          <MaterialIcons name="photo-library" size={30} color="white" />
          <Text style={styles.textoBoton}>Cargar Imagen 2</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 10, alignItems: "center", width: "100%" }}>
          <TouchableOpacity style={styles.botonContinuar}>
            <Text style={styles.textoBoton}>Enviar</Text>
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
    height: 250,
    backgroundColor: "#FF7F11",
  },
  textoRegistro: {
    color: "white",
    fontSize: 42,
    marginTop: 16,
    position: "absolute",
    top: 150,
    left: '12%',
    fontFamily: 'Montserrat_300Light',
  },
  imageNaranja: {
    width: 150,
    height: 150,
    marginRight: 'auto',
    position: 'absolute',
    left: -30,
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
    borderRadius: 10, // Bordes redondeados para la imagen
    borderWidth: 3,
    borderColor: '#FF7F11', // Color de borde similar al de la sección de encabezado
    alignSelf: 'center', // Centrado horizontal de la imagen
  },
  botonCargarImagen: {
    marginTop: 20,
    backgroundColor: "#FF7F11", // Color de fondo llamativo
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50, // Hacemos el botón redondeado
    flexDirection: 'row', // Icono y texto en fila
    alignItems: 'center', // Alineamos el icono y el texto
    justifyContent: 'center', // Centramos el contenido
  },
  textoBoton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10, // Espacio entre el ícono y el texto
  },
  botonContinuar: {
    marginTop: 10,
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});

