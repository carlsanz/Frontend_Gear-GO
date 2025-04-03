import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Herramientas disponibles
const toolsAvailable = [
  { id: "1", name: "TALADRO ELÉCTRICO", price: "Hora: 4.00 HNL\nDía: 100.00 HNL\nSemana: 500 HNL", image: require("../assets/taladro.jpeg") },
  { id: "2", name: "SIERRA ELÉCTRICA", price: "Hora: 4.00 HNL\nDía: 100.00 HNL\nSemana: 500 HNL", image: require("../assets/sierra.jpeg") },
];

// Herramientas en renta
const rentedTools = [
  { id: "1", name: "SIERRA", timeLeft: "2 días", price: "Semana: 500 HNL", client: "Joel Vasquez", image: require("../assets/desarmadores.jpg") }
];

const ToolBoxAgg = () => {
  const [selectedTab, setSelectedTab] = useState("todas");

  // Selección de herramientas según la pestaña activa
  const tools = selectedTab === "todas" ? toolsAvailable : rentedTools;

  const ToolItem = ({ item, isRented }) => (
    <View style={styles.toolContainer}>
      <Text style={styles.toolName}>{item.name}</Text>
      <Image source={item.image} style={styles.toolImage} />
      {isRented ? (
        <>
          <Text style={styles.toolInfo}>Tiempo restante: {item.timeLeft}</Text>
          <Text style={styles.toolInfo}>{item.price}</Text>
          <Text style={styles.toolInfo}>Cliente: {item.client}</Text>
        </>
      ) : (
        <>
          <Text style={styles.toolInfo}>{item.price}</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver detalles</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  const ToolList = ({ tools, isRented }) => (
    <FlatList
      style={styles.list}
      data={tools}
      keyExtractor={(item) => item.id}
      numColumns={isRented ? 1 : 2}
      renderItem={({ item }) => <ToolItem item={item} isRented={isRented} />}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <FontAwesome name="bars" size={24} color="white" />
          <Image source={require("../assets/perfil.jpeg")} style={styles.profileImage} />
          <FontAwesome name="bell" size={24} color="white" />
        </View>
        <View style={styles.headerName}>
          <Text style={styles.headerText}>LISBETH DANIELA ERAZO</Text>
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
      </View>

      {/* Renderización de las listas según la pestaña seleccionada */}
      {selectedTab === "renta" ? (
        <ToolList tools={rentedTools} isRented={true} />
      ) : (
        <ToolList tools={toolsAvailable} isRented={false} />
      )}

      {/* Botón flotante */}
      {selectedTab !== "renta" && (
        <TouchableOpacity style={styles.floatingButton}>
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
      )}

      {/* Barra de navegación */}
      <View style={styles.navBar}>
        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={30} color="black" />
          <Text style={styles.navText}>Rentadas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/iconoHome.png")} style={styles.homeIcon} />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="briefcase" size={30} color="#F97316" />
          <Text style={[styles.navText, styles.activeNavText]}>ToolBox</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F97316",
    height: 200,
    justifyContent: "space-between",
  },
  headerContent: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
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
    height: 80,
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
  },
});

export default ToolBoxAgg;
