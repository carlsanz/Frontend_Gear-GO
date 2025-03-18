import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg"; // Importa el ícono

const Login = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f97316", justifyContent: "center", alignItems: "center", padding: 24 }}>
      {/* Icono */}
      

      {/* Título */}
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginTop: 16 }}>Login</Text>

      {/* Inputs */}
      <TextInput
        placeholder="Correo"
        placeholderTextColor="#000"
        style={{ width: "100%", backgroundColor: "white", color: "black", paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8, marginTop: 16 }}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#000"
        secureTextEntry
        style={{ width: "100%", backgroundColor: "white", color: "black", paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8, marginTop: 12 }}
      />

      {/* Botón */}
      <TouchableOpacity style={{ backgroundColor: "black", paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8, marginTop: 16 }}>
        <Text style={{ color: "white", fontSize: 18 }}>Ingresar</Text>
      </TouchableOpacity>

      {/* Enlace de registro */}
      <Text style={{ color: "white", marginTop: 16 }}>
        ¿No tienes cuenta?{" "}
        <Text style={{ color: "black", fontWeight: "bold" }}>Regístrate</Text>
      </Text>
    </View>
  );
};

export default Login;
