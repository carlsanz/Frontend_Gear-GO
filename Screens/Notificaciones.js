import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Notificaciones = ({ navigation }) => {
  const rentedTools = [
    { id: "1", name: "SIERRA", timeLeft: "2 días", price: "500 HNL", propietario: "Joel Vasquez", image: require("../assets/desarmadores.jpg") }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <FontAwesome name="bars" size={24} color="white" />
          <FontAwesome name="bell" size={24} color="white" />
        </View>
        <View style={styles.headerName}>
          <Text style={styles.headerText}>NOTIFICACIONES</Text>
        </View>
      </View>

      
      <FlatList
        data={rentedTools}
        numColumns={1}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }} // Espacio adicional para la barra de navegación
        renderItem={({ item }) => (
          <View style={{ flex: 1, backgroundColor: "white", margin: 20, marginTop: 30, padding: 12, borderRadius: 8, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
            <Image source={item.image} style={{ width: 60, height: 60, marginBottom: 8 }} />
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>Tiempo restante: {item.timeLeft}</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>Precio: {item.price}</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>Propietario: {item.propietario}</Text>
            <TouchableOpacity style={{ marginTop: 8, backgroundColor: "#F97316", paddingVertical: 6, paddingHorizontal: 16, borderRadius: 4 }}>
              <Text style={{ color: "white", fontSize: 12 }}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Barra de navegación */}
      <View style={styles.navBar}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome name="shopping-cart" size={24} color="black" />
          <Text style={{ textAlign: "center", fontSize: 12, color: "black" }}>Rentadas</Text>
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
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
  navText: {
    textAlign: "center",
    fontSize: 12,
  },
});

export default Notificaciones;