import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const rentedTools = [
    { id: "1", name: "SIERRA", timeLeft: "2 días", price: "500 HNL", propietario: "Joel Vasquez", image: require("../assets/desarmadores.jpg") }
  ];


const Rentadas = ({navigation}) => {

    return(
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

              <FlatList
                data={rentedTools}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, backgroundColor: "white", margin: 20, marginTop:30, padding: 12, borderRadius: 8, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4 }}>
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
              <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, backgroundColor: "white", borderTopWidth: 1, borderColor: "#E5E7EB" }}>
                <TouchableOpacity style={{ alignItems: "center" }}>
                  <FontAwesome name="shopping-cart" size={24} color="#F97316" />
                  <Text style={{ textAlign: "center", fontSize: 12, color:"#F97316" }}>Rentadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Home")}>
                  <Image source={require("../assets/iconoHome.png")} style={{ width: 40, height: 30 }}/>
                  <Text style={styles.navText}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("ToolBoxAgg")}>
                  <FontAwesome name="briefcase" size={24} color="black" />
                  <Text style={styles.navText} >ToolBox</Text>
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
      justifyContent:"center",
      alignContent: "space-between"
    },
    headerContent: {
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginTop: 15,
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
    filterButtons: {
      flexDirection: "row",
      width: "100%",
      height: 40,
      backgroundColor: "#F97316",
    },
    filterButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    selectedButton: {
      backgroundColor: "#F5F5F5",
      borderTopRightRadius: 8
    },
    toolContainer: {
      backgroundColor: "white",
      margin: 8,
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    toolName: {
      fontWeight: "bold",
      textAlign: "center",
    },
    toolImage: {
      width: "100%",
      height: 100,
      resizeMode: "contain",
      marginBottom: 8,
    },
    toolInfo: {
      fontSize: 12,
      color: "gray",
    },
    detailsButton: {
      marginTop: 8,
      backgroundColor: "#F97316",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 4,
    },
    detailsButtonText: {
      color: "white",
      fontSize: 12,
    },
    list: {
      marginTop: 20,
      paddingHorizontal: 16,
    },
    floatingButton: {
      position: "absolute",
      bottom: 80,
      right: 20,
      backgroundColor: "black",
      padding: 16,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      height: 60,
      width: 60,
      elevation: 4,
    },
    navBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 12,
      backgroundColor: "white",
      borderTopWidth: 1,
      borderColor: "#E5E7EB",
    },
    homeIcon: {
      width: 40,
      height: 40,
    },
    navText: {
      textAlign: "center",
      fontSize: 12,
    },
    activeNavText: {
      color: "#F97316",
    },})

export default Rentadas;