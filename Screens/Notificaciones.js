import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../Screens/AuthContext"; 

const Notificaciones = ({ navigation }) => {
    const { user } = useAuth();
  const [notifications, setNotifications] = useState([]); // Estado para almacenar las notificaciones
  const [loading, setLoading] = useState(true); // Estado para manejar el indicador de carga

  // Simula el usuario logueado
  const loggedInUser = user.id_usuario; // Cambia el ID según el usuario logueado

  // Función para obtener las notificaciones desde el backend
  const fetchNotifications = async () => {
    try {
        const response = await fetch(`http://192.168.1.10:5000/notificaciones/${user.id_usuario}`); // Cambia la URL si es necesario
        const data = await response.json();
        if (response.ok) {
            setNotifications(data.data); // Asegúrate de usar `data.data` si el backend devuelve un objeto con la clave `data`
        } else {
            console.error("Error al obtener notificaciones:", data.error);
        }
    } catch (error) {
        console.error("Error al obtener notificaciones:", error);
    } finally {
        setLoading(false);
    }
  };

  // Función para enviar una notificación
  const sendNotificationDenegacion = async (senderId, receiverId, toolName) => {
    try {
        const notificationData = {
            alquiler_id: null, // Si no está relacionado con un alquiler, puedes enviar `null`
            sender_id: receiverId, // Usuario logueado como remitente
            receiver_id: senderId, // Usuario que envió la solicitud original
            tipo_notificacion: 'Denegación',
            contenido: `Tu solicitud para alquilar la herramienta "${toolName}" ha sido denegada.`,
            estado: 'no leída',
        };

        console.log('Datos enviados al backend:', notificationData); // Verifica los datos enviados

        const response = await fetch('http://192.168.1.10:5000/notificaciones/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(notificationData),
        });

        if (response.ok) {
            console.log('Notificación enviada correctamente');
        } else {
            console.error('Error al enviar la notificación');
            const errorData = await response.json();
            console.error('Detalles del error:', errorData);
        }
    } catch (error) {
        console.error('Error al enviar la notificación:', error);
    }
  };

  // Llama a la función al montar el componente
  useEffect(() => {
    fetchNotifications();
  }, []);

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

      {/* Indicador de carga */}
      {loading ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>Cargando notificaciones...</Text>
      ) : (
        <FlatList
          data={notifications}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 80 }} // Espacio adicional para la barra de navegación
          renderItem={({ item }) => (
            <View style={styles.notificationCard}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", margin: 10 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 4 }}>{item.sender}</Text>
                <Text style={{ fontWeight: "bold", textAlign: "center" }}>{item.type}</Text>
            </View>
            <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>{item.message}</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>Herramienta: {item.toolName}</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>Días: {item.totalDays}</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "gray", marginTop: 4 }}>Precio Total: {item.totalPrice} HNL</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 10 }}>
                <TouchableOpacity
                    style={{
                        marginTop: 8,
                        backgroundColor: "#FF1B1C",
                        paddingVertical: 6,
                        paddingHorizontal: 16,
                        borderRadius: 4,
                    }}
                    onPress={() => {
                        sendNotificationDenegacion(item.receiver_id, loggedInUser, item.toolName); // Usa la propiedad correcta
                        console.log('Solicitud denegada');
                    }}
                >
                    <Text style={{ color: "white", fontSize: 12 }}>Denegar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginTop: 8,
                        backgroundColor: "#FFB400",
                        paddingVertical: 6,
                        paddingHorizontal: 16,
                        borderRadius: 4,
                    }}
                    onPress={() => navigation.navigate("DetalleNotificacion", { notification: item })}
                >
                    <Text style={{ color: "white", fontSize: 12 }}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </View>
          )}
        />
      )}

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
  notificationCard: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    marginTop: 30,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailsButton: {
    marginTop: 8,
    backgroundColor: "#F97316",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
});

export default Notificaciones;