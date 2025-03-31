import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const tools = [
  { id: "1", name: "TALADRO ELÉCTRICO", price: "Hora: 4.00 HNL\nDía: 100.00 HNL\nSemana: 500 HNL", image: require("../assets/taladro.jpeg") },
  { id: "2", name: "SIERRA ELÉCTRICA", price: "Hora: 4.00 HNL\nDía: 100.00 HNL\nSemana: 500 HNL", image: require("../assets/sierra.jpeg") },
];

const ToolBoxAgg = () => {
    const [selectedTab, setSelectedTab] = useState("todas");

    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            {/* Encabezado */}
            <View>
                <View style={{ backgroundColor: "#F97316", padding: 20, marginTop:20, height: 150, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <FontAwesome name="bars" size={24} color="white" />
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>JOSE MANUEL GARCIA</Text>
                    <FontAwesome name="bell" size={24} color="white" />
                </View>

                {/* Botones de Filtro */}
                <View style={{ flexDirection: "row", backgroundColor: selectedTab === "todas" ? "#F97316" : "#F97316", overflow: "hidden" }}>
                    <TouchableOpacity 
                        style={[
                            { flex: 1, padding: 12, backgroundColor: "#F97316",   },
                            selectedTab === "todas" && { backgroundColor: "#F5F5F5", borderTopRightRadius: 8, }
                        ]}
                        onPress={() => setSelectedTab("todas")}
                    >
                        <Text style={{ textAlign: "center", color: selectedTab === "todas" ? "black" : "#F5F5F5",  }}>
                            Todas las Herramientas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[
                            { flex: 1, padding: 12, backgroundColor: "#F97316", },
                            selectedTab === "renta" && { backgroundColor: "#F5F5F5", borderTopLeftRadius: 8, }
                        ]}
                        onPress={() => setSelectedTab("renta")}
                    >
                        <Text style={{ textAlign: "center", color: selectedTab === "renta" ? "black" : "white",}}>
                            En renta
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Lista de herramientas */}
            <FlatList
                style={{ marginTop: 20, paddingHorizontal: 16 }}
                data={tools}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, backgroundColor: "white", margin: 8, padding: 12, borderRadius: 8, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4 }}>
                        <Image source={item.image} style={{ width: 60, height: 60, marginBottom: 8 }} />
                        <Text style={{ fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
                        <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>{item.price}</Text>
                        <TouchableOpacity style={{ marginTop: 8, backgroundColor: "#F97316", paddingVertical: 6, paddingHorizontal: 16, borderRadius: 4 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            
            {/* Botón flotante */}
            <TouchableOpacity style={{ position:  "absolute", bottom: 80, display: selectedTab === "renta"? "none": "block", right: 20, backgroundColor: "black", padding: 16, marginBottom: 10, borderRadius: 30, justifyContent: "center" ,alignItems: "center", height:60, width: 60,  elevation: 4 }}>
                <FontAwesome name="plus" size={24} color="white" />
            </TouchableOpacity>

            {/* Barra de navegación */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, backgroundColor: "white", borderTopWidth: 1, borderColor: "#E5E7EB" }}>
                <TouchableOpacity>
                    <FontAwesome name="shopping-cart"  size={30} color="black" />
                    <Text style={{ textAlign: "center", fontSize: 12 }}>Rentadas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../assets/iconoHome.png")} style={{ width: 40, height: 40 }} />
                    <Text style={{ textAlign: "center", fontSize: 12 }}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="briefcase" size={30} color="#F97316" />
                    <Text style={{ textAlign: "center", fontSize: 12, color: "#F97316" }}>ToolBox</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ToolBoxAgg;
