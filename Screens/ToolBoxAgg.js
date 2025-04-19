import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ToolBoxAgg = ({ navigation }) => {
  const [toolsAvailable, setToolsAvailable] = useState([
    { id: "1", name: "TALADRO ELÉCTRICO", price: "100.00 HNL", image: require("../assets/taladro.jpeg"), description: "En perfectas condiciones, cuenta con los desarmadores que se muestran en la imagen.", marca: "Marca: MAKITA", modelo: "Makita HT" },
    { id: "2", name: "PULIDORA", price: "100.00 HNL", image: require("../assets/sierra.jpeg"), description: "En perfectas condiciones", marca: "Marca: MAKITA", modelo: "Makita HT" },
  ]);

  const rentedTools = [
    {
      id: "1",
      name: "SIERRA",
      timeLeft: "2 días",
      totalDays: 7, // Número total de días por los que fue rentada
      price: "Semana: 500 HNL",
      totalPrice: "500 HNL", // Precio total del alquiler
      client: "Joel Vasquez",
      image: require("../assets/desarmadores.jpg"),
    },
    {
      id: "2",
      name: "SIERRA",
      timeLeft: "1 día",
      totalDays: 5,
      price: "Semana: 500 HNL",
      totalPrice: "350 HNL", // Precio total del alquiler
      client: "Joel Vasquez",
      image: require("../assets/desarmadores.jpg"),
    },
  ];

  const [selectedTab, setSelectedTab] = useState("todas");

  // Selección de herramientas según la pestaña activa
  const tools = selectedTab === "todas" ? toolsAvailable : rentedTools;

  // Función para quitar herramienta
  const removeTool = (id) => {
    setToolsAvailable((prevTools) => prevTools.filter((tool) => tool.id !== id));
  };

  const ToolItem = ({ item, isRented, navigation }) => (
    <Pressable
      style={[styles.toolContainer, isRented && styles.toolContainerRented]}
      onPress={() => navigation.navigate("DetalleHerramienta", { tool: item, isRented })}
    >
      <Image source={item.image} style={[styles.toolImage, isRented && styles.toolImageRented]} />
      <Text style={styles.toolName}>{item.name}</Text>
      <View style={styles.toolDetails}>
        {isRented ? (
          <>
            <Text style={styles.toolInfo}>Rentada por: {item.client}</Text>
            <Text style={styles.toolInfo}>Durante: {item.totalDays} días</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{fontSize: 13, color: "#F97316", marginVertical: 2,}}>Precio: {item.totalPrice}</Text>
            <Text style={{fontSize: 13, color: "#FF1B1C", marginVertical: 2,}}>Restan: {item.timeLeft}</Text>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.toolInfo}>{item.marca}</Text>
            <Text style={styles.toolPrice}>{item.price}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeTool(item.id)}
            >
              <Text style={styles.removeButtonText}>Quitar Herramienta</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </Pressable>
  );

  const ToolList = ({ tools, isRented }) => (
    <FlatList
      data={tools}
      keyExtractor={(item) => item.id}
      numColumns={isRented ? 1 : 2} // 1 columna para herramientas en renta, 2 para disponibles
      contentContainerStyle={{ paddingHorizontal: 8 }}
      renderItem={({ item }) => <ToolItem item={item} isRented={isRented} navigation={navigation} />}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <FontAwesome name="bars" size={24} color="white" />
          <FontAwesome name="bell" size={24} color="white" />
        </View>
        <View style={styles.headerName}>
          <Text style={styles.headerText}>CAJA DE HERRAMIENTAS</Text>
        </View>
      </View>

      {/* Botones de Filtro */}
      <View style={styles.filterButtons}>
        <TouchableOpacity
          style={[styles.filterButton, selectedTab === "todas" && { backgroundColor: "#F5F5F5", borderTopRightRadius: 8 }]}
          onPress={() => setSelectedTab("todas")}
        >
          <Text style={{ color: selectedTab === "todas" ? "black" : "white" }}>
            Todas las Herramientas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, selectedTab === "renta" && { backgroundColor: "#F5F5F5", borderTopLeftRadius: 8 }]}
          onPress={() => setSelectedTab("renta")}
        >
          <Text style={{ color: selectedTab === "renta" ? "black" : "white" }}>
            En renta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Renderización de las listas según la pestaña seleccionada */}
      {selectedTab === "renta" ? (
        <ToolList tools={rentedTools} isRented={true} />
      ) : (
        <ToolList tools={toolsAvailable} isRented={false} />
      )}

      {/* Botón flotante */}
      {selectedTab !== "renta" && (
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate("NuevaHerramienta")}>
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
      )}

      {/* Barra de navegación */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, backgroundColor: "white", borderTopWidth: 1, borderColor: "#E5E7EB" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Rentadas")} style={{ alignItems: "center" }}>
          <FontAwesome name="shopping-cart" size={24} color="black" />
          <Text style={{ textAlign: "center", fontSize: 12 }}>Rentadas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ alignItems: "center" }}>
          <Image source={require("../assets/iconoHome.png")} style={{ width: 40, height: 30 }} />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome name="briefcase" size={24} color="#F97316" />
          <Text style={{ fontSize: 12, color: "#F97316" }}>ToolBox</Text>
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
    marginBottom:16
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
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    
    width: "46%", // Por defecto, ocupa el 46% del ancho para herramientas disponibles
  },
  toolContainerRented: {
    width: "95%", // Ocupa casi todo el ancho para herramientas en renta
    height: 350, // Aumenta la altura para acomodar más información
  },
  toolImage: {
    marginTop: 10,
    width: "100%",
    height: 150,
    resizeMode: "stretch"
    
  },
  toolImageRented: {
    width: "100%",
    height: 200, // Aumenta la altura de la imagen para herramientas en renta
    resizeMode: "cover",
    
  },
  toolName: {
    fontWeight: "bold",
    fontSize: 13,
    margin: 6,
  },
  toolDetails: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  toolInfo: {
    fontSize: 13, // Aumenta ligeramente el tamaño del texto para mejor legibilidad
    color: "gray",
    marginVertical: 2,
  },
  toolPrice: {
    fontSize: 13,
    color: "#F97316",
    fontWeight: "bold",
    marginVertical: 4,
  },
 
  detailsButton: {
    marginTop: 6,
    backgroundColor: "#F97316",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  detailsButtonText: {
    color: "white",
    fontSize: 11, // Ajusta el tamaño del texto del botón
    fontWeight: "bold",
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
  },
  removeButton: {
    width: "100%",
    marginTop: 8,
    backgroundColor: "#FF1B1C",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  removeButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ToolBoxAgg;
