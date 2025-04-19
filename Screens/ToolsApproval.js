import react from "react";
import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const tools =[
    {id: 1, name: 'Taladro Eléctrico', price: '100 Lps', image: require('../assets/taladro2.png'),
        description: 'Taladro eléctrico de alta potencia para realizar trabajos de perforación en excelente estado'
    },
    {id: 2, name: 'Pulidora', price: '100 Lps', image: require('../assets/pulidora@3X.png'),
        description: 'Pulidora de alta calidad para realizar trabajos de pulido en excelente estado'
    },
];

export default function ToolsApproval( ){

    const [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_400Regular,
        Montserrat_300Light,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <FontAwesome name="arrow-left" 
                    style={styles.icon}
                    onPress={() => navigation.goBack()}
                    />
                    <Image source={require("../assets/naranja2.png")} style={styles.imageHeader}  />
                    <Text style={styles.headerText}> Aprobación de Herramientas </Text>
                </View>

                {tools.map((tool) =>
                    <TouchableOpacity
                    key={tool.id}
                    style={styles.toolCard}
                    onPress={()=> navigation.navigate('ToolsDetails', {tool})}>
                        <Image source={tool.image} style={styles.toolImage} resizeMode="contain" />
                        <View style={styles.toolInfo}>
                            <Text style={styles.toolName}> {tool.name} </Text>
                            <Text style={styles.tooltext}> Alquiler por hora: {tool.price}</Text>
                            <TouchableOpacity style={styles.detailsButton} onPress={()=> navigation.navigate('ToolsDetails', {tool})}>
                            <Text style={styles.textButton}>Ver detalles</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    )}

            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E3E3E3',
        alignItems:'center'
        
    },
    header:{
        backgroundColor: '#FF7F11',
        padding: 20,
        height:100,
        width:'100%',
        alignItems:'center',
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        position: 'relative'
    },
    headerText:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'black',
        marginTop: 20,
        zIndex:1, 
        fontFamily:'Montserrat_400Regular'
    },

    toolCard: { 
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        marginvertical: 10,
        borderRadius: 15,
        height:170,
        width: '95%',
        marginTop: 10,
        alignItems:'center'
    },

    toolImage: {
        width:'40%',
        height: '90%' ,
        borderRadius: 5
    },

    toolInfo: {
        marginLeft: 10,
        justifyContent: 'center',
        

    },

    toolName:{
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 30,
        fontFamily:'Montserrat_400Regular'
    },

    detailsButton:{
        color: '#FF7F11',
        fontWeight: 'bold',
        marginTop: 20,
        left: 125,
        backgroundColor: '#FF7F11',
        width:90,
        height: 30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },

    textButton:{
        color:'white',
        fontFamily:'Montserrat_300Light'
    },

    icon:{
        color: 'white',
        fontSize: 25,
        right: 180,
    },

    imageHeader:{
        width:90,
        height:80,
        zIndex:0,
        position:'absolute',
        right:0

    },

    tooltext:{
        fontFamily:'Montserrat_300Thin'
    },

});