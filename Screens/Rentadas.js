import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../Screens/AuthContext"; // Importa el contexto de autenticación

const Rentadas = ({ navigation }) => {
    const { user } = useAuth(); // Obtén el usuario logueado desde el contexto
    const [rentedTools, setRentedTools] = useState([]); // Estado para herramientas rentadas

    const toolImages = {
      1: require("../assets/taladro.jpeg"), // Imagen para la herramienta con id_herramienta 1
      2: require("../assets/sierra.jpeg"), // Imagen para la herramienta con id_herramienta 2
      3: require("../assets/desarmadores.jpg"), // Imagen para la herramienta con id_herramienta 3
      default: require("../assets/placeholder.jpg"),
    };
  
    // Función para obtener las herramientas rentadas desde el backend
    const fetchRentedTools = async () => {
        try {
            const response = await fetch(`http://192.168.1.10:5000/alquiler/${user.id_usuario}`, { // Usa el ID del usuario logueado
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (response.ok) {
                setRentedTools(data.data); // Actualiza el estado con las herramientas rentadas
            } else {
                console.error("Error al obtener herramientas rentadas:", data.error);
            }
        } catch (error) {
            console.error("Error en la solicitud de herramientas rentadas:", error);
        }
    };

    // Llama a la función al cargar el componente
    useEffect(() => {
        if (user && user.id_usuario) {
            fetchRentedTools();
        }
    }, [user]);

    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            {/* Encabezado */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <FontAwesome name="bars" size={24} color="white" />
                    <FontAwesome name="bell" size={24} color="white" />
                </View>
                <View style={styles.headerName}>
                    <Text style={styles.headerText}>HERRAMIENTAS RENTADAS</Text>
                </View>
            </View>

            {/* Lista de herramientas rentadas */}
            <FlatList
                data={rentedTools}
                numColumns={2}
                keyExtractor={(item) => item.id_herramienta.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        style={{
                            width: "94%",
                            height: 350,
                            backgroundColor: "white",
                            margin: 8,
                            borderRadius: 8,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                        }}
                        onPress={() => navigation.navigate("DetalleHerramienta", { tool: item })}
                    >
                        <Image
                            source={toolImages[item.id_herramienta] || toolImages.default}
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                        />
                        <Text style={{ fontWeight: "bold", margin: 6, fontSize: 13 }}>{item.Nombre}</Text>
                        <View style={{ justifyContent: "space-between", paddingHorizontal: 8, paddingBottom: 8 }}>
                            <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>Durante: {item.total_dias} días</Text>
                            <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>Propietario: {item.propietario}</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 13, color: "#F97316", marginVertical: 2 }}>Precio total: {item.precio_total} HNL</Text>
                                <Text style={{ fontSize: 13, color: "#FF1B1C", marginVertical: 2 }}>Restan: {Math.max(0, Math.ceil((new Date(item.fecha_fin) - new Date()) / (1000 * 60 * 60 * 24)))} días</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
            />

            {/* Barra de navegación */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, backgroundColor: "white", borderTopWidth: 1, borderColor: "#E5E7EB" }}>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <FontAwesome name="shopping-cart" size={24} color="#F97316" />
                    <Text style={{ textAlign: "center", fontSize: 12, color: "#F97316" }}>Rentadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/iconoHome.png")} style={{ width: 40, height: 30 }} />
                    <Text style={styles.navText}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("ToolBoxAgg")}>
                    <FontAwesome name="briefcase" size={24} color="black" />
                    <Text style={styles.navText}>ToolBox</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#F97316",
        height: 170,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "space-between",
    },
    headerContent: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerName: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    navText: {
        textAlign: "center",
        fontSize: 12,
    },
});

export default Rentadas;