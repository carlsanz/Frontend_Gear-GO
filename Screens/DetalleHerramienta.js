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
            <Text style={{fontFamily: 'BebasNeue_400Regular',  fontSize: 18, margin: 10}}>TALADRO ELECTRICO</Text>
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

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 15}}>
                <View style={{height: 60, margin: 15, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start"}}>
                    <Text style={{fontFamily: 'Montserrat_400Regular',  fontSize: 18, }}>Tarifa de alquiler</Text>
                    <Text style={{fontFamily: 'Montserrat_400Regular',  fontSize: 18, }}>Hora: 50.00 HNL</Text>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor: "#ffb400", padding: 7, borderRadius: 10, width: 120, height: 50, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontFamily: 'Montserrat_400Regular',  fontSize: 18, color:"#FFF"}}>Rentar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 15}}>
                <Text style={{fontFamily: 'Montserrat_400Regular',  fontSize: 13, margin: 10}}>Marco Antonio Dominguez</Text>
                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", }}>
                <FontAwesome name="star" size={24} color="yellow" />
                <FontAwesome name="star" size={24} color="yellow" />
                <FontAwesome name="star" size={24} color="yellow" />    
                <FontAwesome name="star" size={24} color="yellow" />
                <FontAwesome name="star" size={24} color="gray"  />
                </View>
            </View>
            <Text style={{fontFamily: 'Montserrat_400Regular',  fontSize: 15, margin: 10}}>Taladro eléctrico de alta potencia, ideal para perforar madera, metal y otros materiales. Ligero y fácil de manejar.</Text>
            
            <Text>OPINIONES</Text>
            <ScrollView style={{width:"80%", backgroundColor:"gray", height:150}} >

            </ScrollView>
            </ScrollView>
            

        </View>

    );
}

export default DetalleHerramienta;