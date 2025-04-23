import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useMessage } from './MessageProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);
  const { showMessage } = useMessage();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.101.1:5000/login/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contrasena }),
      });

      const data = await response.json();

      if (response.ok) {
        setError(false);
        showMessage('Inicio de sesión correcto', true); // Muestra mensaje de éxito
        setTimeout(() => navigation.navigate('ToolBoxAgg'), 3000); // Redirige después de 3 segundos
      } else {
        setError(true);
        showMessage(data.message || 'Usuario o contraseña incorrectos', false); // Muestra mensaje de error
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
      showMessage('No se pudo conectar con el servidor', false); // Muestra error de conexión
      setError(true);
    }
    };

  return (
    <View style={{ flex: 1, backgroundColor: "#f97316", justifyContent: "center", alignItems: "center", padding: 24 }}>
      {/* Icono */}
      <Image source={require("../assets/Logo_sin_nombre.png")} style={{ width: 200, height: 200, marginBottom: 4 }} />

      {/* Título */}
      <Text style={{ fontFamily: "Montserrat", color: "white", fontSize: 24 }}>Login</Text>

      {/* Inputs */}
      <TextInput
        placeholder="Correo"
        placeholderTextColor="#000"
        value={email}
        onChangeText={setEmail}
        style={[
          { 
            width: "100%", 
            backgroundColor: "white", 
            color: "black", 
            paddingHorizontal: 16, 
            paddingVertical: 12,  
            borderRadius: 8, 
            marginTop: 16,
            
          },
          error && { backgroundColor: "#f8d7da", borderWidth: 2, borderColor: "#e74c3c" } // Aplica borde rojo si hay error
        ]}
      />
      <TextInput
        placeholder=""
        placeholderTextColor="#000"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
        style={[
          { 
            width: "100%", 
            backgroundColor: "white", 
            color: "black", 
            paddingHorizontal: 16, 
            paddingVertical: 12,  
            borderRadius: 8, 
            marginTop: 16,
    
          },
          error && { backgroundColor: "#f8d7da", borderWidth: 2, borderColor: "#e74c3c" } // Aplica borde rojo si hay error
        ]}
      />

      {/* Botón */}
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "black", paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8, marginTop: 16 }}>
        <Text style={{ color: "white", fontSize: 18, fontFamily: "Montserrat" }}>Ingresar</Text>
      </TouchableOpacity>

      {/* Enlace de registro */}
      <Text style={{ color: "white", marginTop: 16 }}>
        ¿No tienes cuenta? <Text style={{ color: "black", fontWeight: "bold", fontFamily: "Montserrat" }}>Regístrate</Text>
      </Text>

      
    </View>
  );
};


export default Login;
