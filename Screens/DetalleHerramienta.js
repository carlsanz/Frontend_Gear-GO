import React from "react-native";
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const DetalleHerramienta = ({navigation}) => {

    const { width } = Dimensions.get('window');

    const images = [
    require('../assets/taladro.jpeg'),
    require('../assets/desarmadores.jpg'),
    
    ];

    return(
        <View>
            <View style={{backgroundColor: "#F97316", padding:8, alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: 100, width: "100%"}}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <FontAwesome name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Image source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} style={{ width: 40, height: 40, borderRadius: 20 }} />

            </View>
            <ScrollView contentContainerStyle={{ alignItems: "center" }} >
            <Text style={{fontFamily: 'BebasNeue_400Regular',  fontSize: 20, margin: 10}}>TALADRO ELECTRICO</Text>
            <View style={{ width: width }}>
                <FlatList
                    data={images}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                    <Image
                        source={item}
                        style={{
                        width: width, // Usa el ancho total de la pantalla
                        height: 200,
                        resizeMode: "cover",
                        }}
                    />
                    )}
                />
                </View>


{/********************************* */}
<View style={{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: 35, // Margen de 2px a izquierda y derecha
  marginTop: 10
}}>
  <View style={{ flex: 1, flexDirection: "column", alignItems: "flex-start" }}>
    <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 12 }}>
    {'\n'}{'\n'}Tarifas de alquiler
    </Text>
    <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 12 }}>
    {'\n'}Hora: 10.00 HNL
    </Text>
  </View>

  <TouchableOpacity style={{
    backgroundColor: "#ffb400",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 20
  }}>
    <Text style={{
      fontFamily: 'Montserrat_400Regular',
      fontSize: 13,
      color: "#FFF",
      
    }}>Rentar</Text>
  </TouchableOpacity>
</View>



{/********************************* */}

<View style={{
  flexDirection: "row",
  justifyContent: "space-between", 
  alignItems: "center",
  marginHorizontal: 20,
  marginTop: 10
}}>
  <Text style={{
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    flex: 1 
  }}>
    {'\n'}{'\n'}{'\n'}Marco Antonio Dominguez
  </Text>

  <View style={{
    flexDirection: "row",
    gap: 5,
    marginTop: 40, 
  }}>
    <FontAwesome name="star" size={16} color="yellow" />
    <FontAwesome name="star" size={16} color="yellow" />
    <FontAwesome name="star" size={16} color="yellow" />
    <FontAwesome name="star" size={16} color="yellow" />
    <FontAwesome name="star" size={16} color="gray" />
  </View>
</View>


<Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 14, marginHorizontal: 20, marginTop: 15, textAlign: "justify" }}>
{'\n'}Taladro eléctrico de la marca FLEX, para todo tipo de trabajo. Batería de 24V de alto rendimiento para un uso prolongado sin interrupciones.{"\n\n"}
  {'\n'}Incluye: Taladro, batería y cargador.
</Text>
                    
            <Text>{'\n'}{'\n'}OPINIONES{'\n'}{'\n'}</Text>
            <ScrollView style={{width:"80%", backgroundColor:"gray", height:150}} >

            </ScrollView>
            </ScrollView>
            

        </View>

    );
}

export default DetalleHerramienta;