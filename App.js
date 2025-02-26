import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../GearGo_Front/assets/Fondo.png')} // Asegúrate de que la ruta sea correcta
        style={styles.image}
      />
       <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar herramientas..."
        />
        <Button title="Buscar" onPress={() => { /* Maneja la acción del botón aquí */ }} />
      </View>

      <Text>¡Hola! 🚀</Text>
      <Text>¡Bienvenido a GearGo! 🚀</Text>
      <Text>Tu app de alquiler de herramientas 🔧</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%', // Ajusta el ancho de la imagen al 100% de la pantalla
    height: 200, // Ajusta la altura de la imagen según sea necesario
  },
  searchContainer: {
    position: 'absolute', // Posiciona el contenedor de búsqueda de forma absoluta
    top: 35, // Ajusta esta propiedad para que esté encima de la imagen
    left: '5%', // Centra el campo de búsqueda horizontalmente
    flexDirection: 'row', // Alinea los elementos en una fila
    alignItems: 'center', // Alinea verticalmente al centro
  },
  searchInput: {
    width: '70%', // Ajusta el ancho del campo de búsqueda
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white', // Fondo blanco para que sea visible sobre la imagen
  },
});
