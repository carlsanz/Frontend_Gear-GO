import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Home = ({ navigation }) => {
    const [tools, setTools] = useState([]); // Estado para almacenar las herramientas
    const [selectedCategory, setSelectedCategory] = useState("Carpinteria");

    // Función para obtener las herramientas desde el backend
    const fetchHerramientas = async () => {
        try {
            const response = await fetch("http://192.168.43.26:5000/api/home/herramientas"); // Cambia la URL si es necesario
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setTools(data); // Actualiza el estado con las herramientas obtenidas
        } catch (error) {
            console.error('Error al obtener las herramientas:', error);
        }
    };

    useEffect(() => {
        fetchHerramientas();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            {/* Encabezado */}
            <View style={{ backgroundColor: "#F97316", padding: 20, height: 170, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <FontAwesome name="bars" size={24} color="white" />
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>GEAR-GO</Text>
                <Image source={require("../assets/perfil.jpeg")} style={{ width: 50, height: 50, borderRadius: 30 }} />
            </View>

            {/* Barra de búsqueda */}
            <View style={{ margin: 10, flexDirection: "row", alignItems: "center", backgroundColor: "white", borderRadius: 10, paddingHorizontal: 10, elevation: 2 }}>
                <TextInput placeholder="Buscar" style={{ flex: 1, height: 40 }} />
                <FontAwesome name="shopping-cart" size={20} color="black" />
            </View>

            {/* Categorías */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
                {['Carpinteria', 'Construccion', 'Electricidad', 'Mecanica'].map((category) => (
                    <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
                        <Text style={{ color: selectedCategory === category ? "#F97316" : "gray", fontWeight: selectedCategory === category ? "bold" : "normal", borderBottomWidth: selectedCategory === category ? 2 : 0, borderBottomColor: "#F97316", paddingBottom: 5 }}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Lista de herramientas */}
            <FlatList
                data={tools}
                keyExtractor={(item) => item.id_herramienta.toString()} // Usa el ID de la herramienta como clave
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate("DetalleHerramienta", { tool: item })}
                        style={{ flex: 1, backgroundColor: "white", margin: 8, paddingTop: 7, borderRadius: 10, elevation: 3, justifyContent: "space-between" }}
                    >
                        {/* Mostrar la imagen */}
                        <Image 
                            source={{ uri: item.imagen }} // Usa la URL de la imagen
                            style={{ width: "100%", height: 120, resizeMode: "stretch" }} 
                        />
                        <Text style={{ fontWeight: "bold", padding: 6 }}>{item.Nombre}</Text>
                        <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                            <Text style={{ fontSize: 12, color: "gray", marginVertical: 4 }}>{item.Marca}</Text>
                            <Text style={{ fontSize: 12, color: "#F97316", marginVertical: 4, fontWeight: "bold" }}>{item.precio_por_dia} HNL</Text>
                            {item.descripcion && <Text style={{ fontSize: 10, color: "gray" }}>{item.descripcion}</Text>}
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 8 }}>
                                <TouchableOpacity style={{ backgroundColor: "#F97316", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                                    <Text style={{ color: "white", fontSize: 12 }}>Rentar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Pressable>
                )}
            />

            {/* Barra de navegación */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, backgroundColor: "white", borderTopWidth: 1, borderColor: "#E5E7EB" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Rentadas")} style={{ alignItems: "center" }}>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                    <Text style={{ textAlign: "center", fontSize: 12 }}>Rentadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Image source={require("../assets/blanco_naranja.png")} style={{ width: 30, height: 30 }} />
                    <Text style={{ textAlign: "center", fontSize: 12, color: "#F97316" }}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("ToolBoxAgg")}>
                    <FontAwesome name="briefcase" size={24} color="black" />
                    <Text style={{ textAlign: "center", fontSize: 12 }}>ToolBox</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
