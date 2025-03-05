import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../GearGo_Front/assets/Fondo.png')} // Asegúrate de que la ruta sea correcta
        style={styles.image_fondo}
      />
       <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar herramientas..."
        />
        <Button title="Buscar" onPress={() => { /* Maneja la acción del botón aquí */ }} />
      </View>

       {/* Contenedor con imagen y texto en la misma línea */}
       <View style={styles.rowContainer}>
        <Image
          source={require('../GearGo_Front/assets/blanco.png')} // Asegúrate de que la ruta sea correcta
          style={styles.image_blanco}
        />
        <Text style={styles.text_rent}>Renta Herramientas a los mejores precios</Text>
      </View>
      <Image
        source={require('../GearGo_Front/assets/fondo2.png')} // Asegúrate de que la ruta sea correcta
        style={styles.image_fondo2}
      />


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
  image_fondo: {
    width: '100%', // Ajusta el ancho de la imagen al 100% de la pantalla
    height: 250,
  },
  searchContainer: {
    position: 'absolute', // Posiciona el contenedor de búsqueda de forma absoluta
    top: 35, // Ajusta esta propiedad para que esté encima de la imagen
    left: '10%', // Centra el campo de búsqueda horizontalmente
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
  rowContainer: {
    flexDirection: 'row', // Asegura que los elementos estén en fila
    alignItems: 'center', // Centra los elementos verticalmente
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop:10,
    marginBottom:10,

  },
  image_blanco:{
    width: 150,
    height: 150,
    marginRight: 40,
    borderRadius: 10, // Bordes redondeados opcionales
    borderWidth: 0, // Agrega un borde
    
  },
  text_rent:{
    fontSize: 25,
    flexShrink: 1,
    
  },
  image_fondo2:{
    width: '100%', 
  }
});
