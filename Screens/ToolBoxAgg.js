import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../Screens/AuthContext"; // Importa el contexto de autenticación

const ToolBoxAgg = ({ navigation }) => {
  const { user } = useAuth(); // Obtén el usuario logueado desde el contexto
  const [toolsAvailable, setToolsAvailable] = useState([]); // Herramientas disponibles
  const [rentedTools, setRentedTools] = useState([]); // Herramientas en renta
  const [selectedTab, setSelectedTab] = useState("todas"); // Pestaña activa

  // Arreglo de imágenes locales
  const toolImages = {
    1: require("../assets/taladro.jpeg"), // Imagen para la herramienta con id_herramienta 1
    2: require("../assets/sierra.jpeg"), // Imagen para la herramienta con id_herramienta 2
    3: require("../assets/desarmadores.jpg"), // Imagen para la herramienta con id_herramienta 3
    default: require("../assets/placeholder.jpg"),
  };

  // Función para obtener herramientas desde el backend
  const fetchTools = async () => {
    try {
      
      const response = await fetch(`http://192.168.1.10:5000/toolbox/${user.id_usuario}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      

      if (response.ok) {
        setToolsAvailable(data.data); // Actualiza las herramientas disponibles
      } else {
        console.error("Error al obtener herramientas:", data.error);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const fetchRentedTools = async () => {
    try {
        const response = await fetch(`http://192.168.1.10:5000/toolbox/renta/${user.id_usuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (response.ok) {
            setRentedTools(data.data); // Actualiza el estado con las herramientas en renta
        } else {
            console.error("Error al obtener herramientas en renta:", data.error);
        }
    } catch (error) {
        console.error("Error en la solicitud de herramientas en renta:", error);
    }
};

  // Llama a la función fetchTools al cargar el componente
  useEffect(() => {
      fetchTools();
  }, []);

  useEffect(() => {
    if (selectedTab === "renta") {
        fetchRentedTools(); // Llama a la función para obtener herramientas en renta
    }
}, [selectedTab]);

  // Función para quitar herramienta
  const removeTool = (id) => {
    setToolsAvailable((prevTools) => prevTools.filter((tool) => tool.id_herramienta !== id));
  };

  const ToolItem = ({ item, isRented }) => {
    const fechaInicio = new Date(item.fecha_inicio);
    const fechaFin = new Date(item.fecha_fin);
    const totalDays = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)); // Diferencia en días

    // Calcular los días restantes
    const today = new Date();
    const daysLeft = Math.max(0, Math.ceil((fechaFin - today) / (1000 * 60 * 60 * 24))); // Días restantes

    // Calcular el precio total
    const totalPrice = totalDays * item.precio_por_dia;

    return (
        <Pressable
            style={[styles.toolContainer, isRented && styles.toolContainerRented]}
            onPress={() => navigation.navigate("DetalleHerramienta", { tool: item, isRented })}
        >
            {/* Muestra la imagen de la herramienta */}
            <Image
                source={toolImages[item.id_herramienta] || toolImages.default} // Usa la imagen correspondiente o la predeterminada
                style={[styles.toolImage, isRented && styles.toolImageRented]}
            />
            <Text style={styles.toolName}>{item.Nombre}</Text>
            <View style={styles.toolDetails}>
                {isRented ? (
                    <>
                        <Text style={styles.toolInfo}>Rentada por: {item.cliente}</Text>
                        <Text style={styles.toolInfo}>Durante: {totalDays} días</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 13, color: "#F97316", marginVertical: 2 }}>Precio total: {totalPrice}</Text>
                            <Text style={{ fontSize: 13, color: "#FF1B1C", marginVertical: 2 }}>Restan: {daysLeft} dias</Text>
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={styles.toolInfo}>{item.Marca}</Text>
                        <Text style={styles.toolPrice}>{item.precio_por_dia} HNL</Text>
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => removeTool(item.id_herramienta)}
                        >
                            <Text style={styles.removeButtonText}>Quitar Herramienta</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </Pressable>
    );
};

  const ToolList = ({ tools, isRented }) => {
    return (
        <FlatList
            data={tools} // Lista de herramientas (disponibles o en renta)
            keyExtractor={(item) => item.id_herramienta.toString()} // Clave única para cada herramienta
            numColumns={isRented ? 1 : 2} // 1 columna para herramientas en renta, 2 para disponibles
            contentContainerStyle={{ paddingHorizontal: 8 }}
            renderItem={({ item }) => <ToolItem item={item} isRented={isRented} />} // Renderiza cada herramienta
        />
    );
};

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <FontAwesome name="bars" size={24} color="white" />
          <TouchableOpacity onPress={() => navigation.navigate("Notificaciones")}>
            <FontAwesome name="bell" size={24} color="white" />
          </TouchableOpacity>
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
          <Text style={{ color: selectedTab === "todas" ? "black" : "white" }}>Todas las Herramientas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, selectedTab === "renta" && { backgroundColor: "#F5F5F5", borderTopLeftRadius: 8 }]}
          onPress={() => setSelectedTab("renta")}
        >
          <Text style={{ color: selectedTab === "renta" ? "black" : "white" }}>En renta</Text>
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
      <View style={styles.navBar}>
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
    resizeMode: "cover", // Cambia a "contain" o "stretch" si es necesario
  },
  toolImageRented: {
    width: "100%",
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
