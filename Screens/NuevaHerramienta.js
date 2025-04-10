import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,} from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'; 



const NuevaHerramienta = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("");
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
    


    return(
        <View style={{ flex: 1, alignContent: "center", alignItems:"center",justifyContent: "center" , backgroundColor:"#F97316" }}>
            <Text style={{fontFamily: 'BebasNeue_400Regular', fontSize: 40,  color:"white" }}>Nueva Herramienta</Text>
            <Text style={{ marginTop: 10, fontFamily: 'Montserrat_400Regular', color:"white"}}>Puedes agregar una nueva herramienta.</Text>
            <TextInput 
            placeholder="Nueva Herramienta"
            placeholderTextColor="black"
            style={{ width: "80%", 
            backgroundColor: "white", 
            color: "black", 
            paddingHorizontal: 16, 
            paddingVertical: 12,  
            borderRadius: 8, 
            marginTop: 16,}}
            ></TextInput>

            <Picker style={{ height: 50, width: "80%", backgroundColor: "white", color: "black", borderRadius: 8, marginTop: 16 }}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="Categoría" value="categoria" />
                <Picker.Item label="Herramienta de Jardinería" value="jardineria" />
                <Picker.Item label="Herramienta de Construcción" value="construccion" />
                <Picker.Item label="Herramienta de Cocina" value="cocina" />
                <Picker.Item label="Herramienta de Limpieza" value="limpieza" />
            </Picker>

            <TextInput
                style={{height: 150,
                    width: "80%",
                    borderRadius: 8,
                    marginTop: 16,
                    padding: 10,
                    fontSize: 16,
                    backgroundColor: "white",
                    color: "black",}}
                placeholder="Descripción de la herramienta"
                multiline={true}
                numberOfLines={6} // opcional, sirve para indicar la altura inicial
                textAlignVertical="top" // para que el texto empiece desde arriba
            />
           

            <TextInput 
            placeholder="Costo de alquiler por hora"
            placeholderTextColor="#000"
            style={{ width: "80%", 
            backgroundColor: "white", 
            color: "black", 
            paddingHorizontal: 16, 
            paddingVertical: 12,  
            borderRadius: 8, 
            marginTop: 16,}}></TextInput>
            
            <View style={{flexDirection: "row", justifyContent: "space-evenly", height: 160, width: "100%", marginTop: 20,}}>

                {/* Imagen 1 seleccionada */}
                {image1 && (
                    <Image source={{ uri: image1 }} style={styles.selectedImage} />
                )}
        
                {/* Botón para seleccionar la imagen 1 */}
                <TouchableOpacity style={styles.botonCargarImagen} onPress={pickImage1}>
                    <MaterialIcons name="photo-library" size={30} color="black" /> 
                    <Text style={styles.textoBoton}>Cargar Imagen 1</Text>
                </TouchableOpacity>
        
                {/* Imagen 2 seleccionada */}
                {image2 && (
                    <Image source={{ uri: image2 }} style={styles.selectedImage} />
                )}
        
                {/* Botón para seleccionar la imagen 2 */}
                <TouchableOpacity style={styles.botonCargarImagen} onPress={pickImage2}>
                    <MaterialIcons name="photo-library" size={30} color="black" />
                    <Text style={styles.textoBoton}>Cargar Imagen 2</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={{marginTop: 30, backgroundColor: "#000000", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10,}}  onPress={() => navigation.navigate("Categoria")}>
                <Text style={{color: "#FFF",
                            fontSize: 18,
                            fontWeight: "bold",}}>Continuar</Text>
            </TouchableOpacity>
            
        </View>

        
    )}

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
        width:"40%",
        backgroundColor: "#FFFF", // Color de fondo llamativo
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8, // Hacemos el botón redondeado
        alignItems: 'center', // Alineamos el icono y el texto
        justifyContent: 'center', // Centramos el contenido
      },
      textoBoton: {
        color: "black",
        fontSize: 15,
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
    
    
    export default NuevaHerramienta;