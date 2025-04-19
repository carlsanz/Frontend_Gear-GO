import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Switch, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'; 

const NuevaHerramienta = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [showOtroNombre, setShowOtroNombre] = useState(false); // Estado para mostrar/ocultar el TextInput
    const [rentalCost, setRentalCost] = useState(0.0); // Estado para el costo de alquiler

    // Función para alternar el estado del Switch
    const toggleSwitch = () => setShowOtroNombre(previousState => !previousState);

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

    // Función para incrementar el costo
    const increaseCost = () => {
        setRentalCost((prevCost) => parseFloat((prevCost + 1).toFixed(2))); // Incrementa en 1 y asegura 2 decimales
    };

    // Función para decrementar el costo
    const decreaseCost = () => {
        setRentalCost((prevCost) => {
            const newCost = prevCost - 1;
            return newCost >= 0 ? parseFloat(newCost.toFixed(2)) : 0; // Evita valores negativos
        });
    };

    // Función para manejar cambios en el TextInput
    const handleInputChange = (value) => {
        const decimalValue = value.replace(/[^0-9.]/g, ""); // Permite solo números y puntos decimales
        setRentalCost(decimalValue ? parseFloat(decimalValue) : 0); // Convierte a número o establece 0
    };

    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            style={{ backgroundColor: "#F97316" }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Nueva Herramienta</Text>
                <Text style={styles.subtitle}>Puedes agregar una nueva herramienta.</Text>

                <Picker
                    style={styles.picker}
                    selectedValue={selectedValue}
                    name="Nombre"
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Nombre de herramienta" value="Nombre" />
                    <Picker.Item label="Herramienta de Jardinería" value="jardineria" />
                    <Picker.Item label="Herramienta de Construcción" value="construccion" />
                    <Picker.Item label="Herramienta de Cocina" value="cocina" />
                    <Picker.Item label="Herramienta de Limpieza" value="limpieza" />
                </Picker>

                {/* Switch para mostrar/ocultar el TextInput */}
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>¿Otro Nombre?</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#FFB400" }}
                        thumbColor={showOtroNombre ? "#f4f3f4" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={showOtroNombre}
                    />
                </View>

                {/* TextInput OtroNombre (se muestra solo si el Switch está activado) */}
                {showOtroNombre && (
                    <TextInput
                        placeholder="Agregar nombre de herramienta"
                        name="OtroNombre"
                        style={styles.textInput}
                    />
                )}

                {/* Otros componentes */}
                <View style={{flexDirection:"row", alignItems: "center", marginTop: 16, width: "80%", justifyContent: "space-between"}}>
            <TextInput
                placeholder="Marca"
                style={{
                    width: "45%",
                    backgroundColor: "white",
                    color: "black",
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginTop: 16,
                }}
            />

          <TextInput
                placeholder="Modelo"
                style={{
                    width: "45%",
                    backgroundColor: "white",
                    color: "black",
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginTop: 16,
                }}
            />
            </View>

            <TextInput
                style={{
                    height: 100,
                    width: "80%",
                    borderRadius: 8,
                    marginTop: 16,
                    padding: 10,
                    fontSize: 16,
                    backgroundColor: "white",
                    color: "black",
                }}
                placeholder="Descripción de la herramienta"
                multiline={true}
                numberOfLines={6}
                textAlignVertical="top"
            />

            <TextInput
                style={{
                    height: 100,
                    width: "80%",
                    borderRadius: 8,
                    marginTop: 16,
                    padding: 10,
                    fontSize: 16,
                    backgroundColor: "white",
                    color: "black",
                }}
                placeholder="Ubicacion actual de la herramienta"
                multiline={true}
                numberOfLines={6}
                textAlignVertical="top"
            />

<Picker
                style={{ height: 50, width: "80%", backgroundColor: "white", color: "black", borderRadius: 8, marginTop: 16 }}
                selectedValue={selectedValue}
                name="Nombre"
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Condicion de herramienta" value="Condicion" />
                <Picker.Item label="Usada" value="Usada" />
                <Picker.Item label="Nueva" value="Nueva" />
                <Picker.Item label="Casi nueva" value="Casi nueva" />
                </Picker>

                {/* Contenedor para el costo de alquiler */}
                
                <View style={styles.rentalCostContainer}>
                <TouchableOpacity style={styles.button} onPress={decreaseCost}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        value={rentalCost.toFixed(2)} // Asegura que siempre se muestren dos decimales
                        keyboardType="numeric" // Muestra teclado numérico
                        onChangeText={handleInputChange} // Maneja cambios en el texto
                        onBlur={() => setRentalCost(parseFloat(rentalCost.toFixed(2)))} // Agrega .00 al perder el foco
                    />
                    <Text style={{color:"white"}}>HNL</Text>
                   
                    
                    <TouchableOpacity style={styles.button} onPress={increaseCost}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

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

                {/* Botón para continuar */}
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => navigation.navigate("Categoria")}
                >
                    <Text style={styles.continueButtonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 60,
    },
    title: {
        fontFamily: 'BebasNeue_400Regular',
        fontSize: 40,
        color: "white",
    },
    subtitle: {
        marginTop: 10,
        fontFamily: 'Montserrat_400Regular',
        color: "white",
    },
    picker: {
        height: 50,
        width: "80%",
        backgroundColor: "white",
        color: "black",
        borderRadius: 8,
        marginTop: 16,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
    },
    switchLabel: {
        color: "white",
        fontSize: 16,
        marginRight: 10,
    },
    textInput: {
        width: "80%",
        backgroundColor: "white",
        color: "black",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 16,
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
    rentalCostContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
        width: "80%",
    },
    button: {
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        width: "50%",
        backgroundColor: "white",
        color: "black",
        
        borderRadius: 8,
      
        textAlign: "center",
        fontSize: 16,
    },
    continueButton: {
        marginTop: 30,
        backgroundColor: "#000000",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    continueButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default NuevaHerramienta;