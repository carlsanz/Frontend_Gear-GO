import { StatusBar } from 'expo-status-bar';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

const herramientas = [
  { id: "1", nombre: "Martillo", imagen: require("../assets/pulidora@3X.png") },
  { id: "2", nombre: "Destornillador", imagen: require("../assets/pulidora@3X.png") },
  { id: "3", nombre: "Llave Inglesa", imagen: require("../assets/taladro@3X.png") },
  { id: "4", nombre: "Sierra", imagen: require("../assets/taladro@3X.png") },
];

export default function LandingPage() {
    const navigation = useNavigation();

    const [indice, setIndice] = useState(0);

    const siguienteHerramienta = () => {
      setIndice((prev) => (prev + 2 < herramientas.length ? prev + 2 : 0));
    };

    const anteriorHerramienta = () => {
      setIndice((prev) => (prev - 2 >= 0 ? prev - 2 : herramientas.length - 2));
    };

    const [fontsLoaded] = useFonts({
      BebasNeue: BebasNeue_400Regular, // Usa el nombre exacto de la fuente instalada
    });
  
    if (!fontsLoaded) {
      return null; // Evita mostrar el contenido antes de cargar la fuente
    }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/Fondo.png')}
        style={styles.image_fondo}
      />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar herramientas..."
        />
        <Button title="Buscar"  /> 
      </View>

      <View style={styles.informationContainer}>
      <Text style={styles.textInfo}>
          GANA DINERO RENTANDO TUS HERRAMIENTAS
        </Text>

        <View style={styles.botonRedondeadoInfo}>
          <Button  style={styles.buttonInfo} title="Registrarme" color="#FF1B1C" onPress={() => navigation.navigate("Pagos")} /> 
        </View>
        
      </View>
      
      <View style={styles.contenedorImagenApp}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image source={require("../assets/app.png")} style={styles.imagenApp} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image source={require("../assets/google.png")} style={styles.imagenApp} />
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <Image
          source={require('../assets/blanco.png')}
          style={styles.image_blanco}
        />
        <Text style={styles.text_rent} >
          Renta Herramientas a los mejores precios
        </Text>
      </View>
      <Image
        source={require('../assets/fondo2.png')}
        style={styles.image_fondo2}
      />

      <StatusBar style="auto" />

      {/* Sección de herramientas con botones */}
      <View style={styles.contenedorCarrusel}>
        <TouchableOpacity onPress={anteriorHerramienta} style={styles.boton}>
          <Text style={styles.textoBoton}>◀</Text>
        </TouchableOpacity>

        <FlatList
          data={herramientas.slice(indice, indice + 2)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <View style={styles.tarjetaHerramienta}>
              <Text style={styles.nombreHerramienta}>{item.nombre}</Text>
              <Image source={item.imagen} style={styles.imagenHerramienta} />
              <Text style={styles.detallesHerramienta}>Hora:4.00 HNL</Text>
              <Text style={styles.detallesHerramienta}>Día:100.00 HNL</Text>
              <Text style={styles.detallesHerramienta}>Semana:500.00 HNL</Text>
              <View style={styles.contenedorBotones}>
              

                <View style={styles.botonRedondeado}>
                  <Button title="Ver detalles" color="#FF7F11" onPress={() => {}} />
                </View>

                <View style={styles.botonRedondeadoRentar}>
                  <Button title="Rentar" color="#FFB400" onPress={() => {}} />
                </View>
              

              </View>  
            </View>
          )}
        />

        <TouchableOpacity onPress={siguienteHerramienta} style={styles.boton}>
          <Text style={styles.textoBoton}>▶</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image_fondo: {
    width: '100%',
    height: 250,
  },
  searchContainer: {
    position: 'absolute', 
    top: 35, 
    left: '10%', 
    flexDirection: 'row',
    alignItems: 'center', 
  },
  searchInput: {
    width: '70%', 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white', 
  },
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
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
    borderRadius: 10, 
    borderWidth: 0, 
  },
  text_rent:{
    fontSize: 25,
    flexShrink: 1,
  },
  image_fondo2:{
    width: '100%', 
  },
  contenedorCarrusel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  tarjetaHerramienta: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    alignItems: "center",
    marginHorizontal: 10, // Añade margen para separación
    width: 140, // Ajusta el tamaño
  },
  imagenHerramienta: {
    width: 150, 
    height: 150, 
    resizeMode: "contain", // Asegura que la imagen se vea nítida
  },
  nombreHerramienta: {
    marginTop: 5,
    fontWeight: "bold",
  },
  boton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  textoBoton: {
    fontSize: 20,
  },
  detallesHerramienta: {
      fontSize:12
  },
  contenedorBotones: {
    flexDirection: 'column',               
    width: '100%',                         
    marginTop: 10,                         
    justifyContent: 'space-between',      
    height: 80,                            
  },
  
  buttonDetalles: {
    
    width: '100%',                        
    height: 30,                            
    justifyContent: 'center',              
    alignItems: 'center',                  
    marginBottom: 10,
                      
    },
  
  buttonRentar: {
    width: '100%',                         
    height: 30,                            
    justifyContent: 'center',              
    alignItems: 'center',
  },

  botonRedondeado: {
    borderRadius: 20,    
    overflow: 'hidden',  
    width: 115,         
    height: 35,         
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 5, 
  },
  botonRedondeadoRentar:{
    borderRadius: 20,
    overflow: "hidden",
        
         
    
  },
  contenedorImagenApp: {
    position: 'absolute', 
    top: 100, 
    left: '70%', 
    transform: [{ translateX: -50 }], 
    flexDirection: 'column', 
    alignItems: 'center',
  }, imagenApp: {
    
    margin: 5 
  },informationContainer:{
    position: 'absolute', 
    top: 80, 
    left: '17%', 
    right:'40%',
    transform: [{ translateX: -50 }], 
    flexDirection: 'column', 
    alignItems: 'center',

  },textInfo:{
    margin:10,
    color: '#FFFFFF',
    fontFamily: 'BebasNeue', 
    fontSize: 19,
    
  },
  botonRedondeadoInfo:{
    borderRadius: 10,  
    overflow: 'hidden',
    marginTop:15,
    
  },
  

});
