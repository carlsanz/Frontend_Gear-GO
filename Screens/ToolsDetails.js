import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";


export default function ToolDetails({ route}){
    const { tool } = route.params;

    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <FontAwesome name="arrow-left" 
                                        style={styles.icon}
                                        onPress={() => navigation.goBack()}
                                        />
                                        <Image source={require("../assets/naranja2.png")} style={styles.imageHeader}  />
                    <Text style={styles.headerText}>{tool.name}</Text>
                    <View style={styles.bankWhite}></View>
                </View>

                <Image source={tool.image} style={styles.toolImage} resizeMode="contain"/>

                <Text style={styles.priceText}>Alquiler por hora: {tool.price}</Text>

                <TextInput
                     placeholder="Precio sugerido de alquiler"
                     style={styles.input}
                     editable={true}
                     />

                
                    <View style={styles.descriptionBox}>
                        <Text style={styles.textBox}>{tool.description}</Text>
                    </View>

                    <TextInput
                     placeholder="Comentario de aceptación"
                     style={styles.input}
                     editable={true}
                     />
                
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.approved]}>
                        <Text style={styles.buttonText}>Aprovada</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.denied]}>
                        <Text style={styles.buttonText}>Denegada</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header:{
        backgroundColor: '#FF7F11',
        padding: 20,
        height:100,
        width:'100%',
        alignItems:'center',
        position: 'relative'
    },

    headerText:{
        fontSize:20,
        color: 'white',
        fontWeight: 'bold',
        zIndex:1,
        fontFamily:'Montserrat_400Regular'
        
    },

    toolImage:{
        width: 200,
        height:150,
        marginVertical:20,
        borderRadius: 10
    },

    priceText:{
        fontSize:16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        width:'90%',
        height:30,
        fontSize: 20,
        fontFamily:'Montserrat_400Regular'
    },

    descriptionBox:{
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        width: '90%',
        padding: 10,
        marginVertical:10,
        
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop:20
    },

    button:{
        padding:10,
        borderRadius:10,
        marginHorizontal:10,
        
    },

    approved:{
        backgroundColor:'green',
        
    },

    denied:{
        backgroundColor:'red'
    },

    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontFamily:'Montserrat_300Light'
    },

    bankWhite:{
        position: 'absolute',
        bottom: -25, 
        width: '120%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius:50,
        borderTopRightRadius:50, 
        zIndex: 0,
    },

    textBox:{
        fontSize: 16,
        color: '#333',
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

    input:{
        backgroundColor: '#F1F1F1',
        width: '90%',
        borderRadius:10,
        padding: 10,
        marginTop:20,
        fontFamily:'Montserrat_300Light'
    },


})