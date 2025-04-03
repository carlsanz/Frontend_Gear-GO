import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const tools = [
  { id: "1", name: "TALADRO ELÉCTRICO", price: "Hora: 4.00 HNL\nDía: 100.00 HNL\nSemana: 500 HNL", image: require("../assets/taladro.jpeg") },
  { id: "2", name: "PULIDORA", price: "Hora: 4.00 HNL\nDía: 100.00 HNL\nSemana: 500 HNL", image: require("../assets/sierra.jpeg") },
//   { id: "3", name: "SET DE DESAMADORES", price: "4.00 HNL", image: require("../assets/desarmadores.jpeg"), description: "En perfectas condiciones, cuenta con los desarmadores que se muestran en la imagen." },
//   { id: "4", name: "SET DE TENAZAS", price: "Hora: 4.00 HNL\nDía: 100.00 HNL\nSemana: 500 HNL", image: require("../assets/tenazas.jpeg") },
];

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("Carpinteria");

    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            {/* Encabezado */}
            <View style={{ backgroundColor: "#F97316", padding: 20, height: 140, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <FontAwesome name="bars" size={24} color="white" />
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>GEAR-GO</Text>
                <Image source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} style={{ width: 40, height: 40, borderRadius: 20 }} />
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
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, backgroundColor: "white", margin: 8, padding: 10, borderRadius: 10, elevation: 3 }}>
                        <Image source={item.image} style={{ width: "100%", height: 80, resizeMode: "contain", marginBottom: 8 }} />
                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: "gray", marginVertical: 4 }}>{item.price}</Text>
                        {item.description && <Text style={{ fontSize: 10, color: "gray" }}>{item.description}</Text>}
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
                            <TouchableOpacity style={{ backgroundColor: "#F97316", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                                <Text style={{ color: "white", fontSize: 12 }}>Ver detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "gray", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                                <Text style={{ color: "white", fontSize: 12 }}>Rentar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {/* Barra de navegación */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, backgroundColor: "white", borderTopWidth: 1, borderColor: "#E5E7EB" }}>
                <TouchableOpacity>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                    <Text style={{ textAlign: "center", fontSize: 12 }}>Rentadas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../assets/blanco_naranja.png")} style={{ width: 30, height: 30 }} />
                    <Text style={{ textAlign: "center", fontSize: 12, color: "#F97316" }}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="briefcase" size={24} color="black" />
                    <Text style={{ textAlign: "center", fontSize: 12 }}>ToolBox</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
