import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";

 export default function UserDetails({ route }){

    const navigation = useNavigation();
    const {user } = route.params;

    return(
        <SafeAreaView>
            <ScrollView>
            <View style= {styles.container}>
                <View style={styles.header}>
                    <FontAwesome name="arrow-left" 
                     style={styles.icon}
                     onPress={() => navigation.goBack()}
                    />
                    <Image source={require("../assets/naranja2.png")} style={styles.imageHeader}  />
                    <Text style={styles.headerText}>{user.name} </Text>
                    <View style={styles.bankWhite}></View>
                </View>

                <Image source={user.photo} style={styles.profileImage} />

                <Text style={styles.sectionTitle}>Identificacíon (Frente) </Text>
                <Image source={user.idFront} style={styles.idImage} />

                <Text style={styles.sectionTitle}>Identificacíon (Reverso) </Text>
                <Image source={user.idBack} style={styles.idImage} />

                <TextInput
                 placeholder="Comentario de aceptación"
                 style={styles.input}
                 editable={true}
                />

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.approved]}>
                        <Text style={styles.buttonText}>Aprobado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.denied]}>
                        <Text style={styles.buttonText}>Denegado</Text>
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
        backgroundColor: 'white',
        alignItems: 'center'
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
        fontSize:18,
        color: 'white',
        fontWeight:'bold',
        fontFamily:'Montserrat_400Regular'
    },
    profileImage:{
        width: 150,
        height: 150,
        borderRadius: 80,
        marginTop: 20
    },

    sectionTitle:{
        fontWeight:'bold',
        marginTop: 20,
        marginBottom: 10,
        fontFamily:'Montserrat_400Regular'
    },

    idImage:{
        width: 250,
        height: 150,
        resizeMode:'contain',
        borderRadius:10
    },

    input:{
        backgroundColor: '#F1F1F1',
        width: '90%',
        borderRadius:10,
        padding: 10,
        marginTop:20,
        fontFamily:'Montserrat_300Light'
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 20
    },

    button: {
        padding:10,
        borderRadius: 10,
        marginHorizontal: 10
    },

    approved: {
        backgroundColor: 'green'
    },

    denied: {
        backgroundColor: 'red'
    },

    buttonText: {
        color:'white',
        fontWeight: 'bold',
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

    bankWhite:{
        position: 'absolute',
        bottom: -25, 
        width: '120%',
        height: 50,
        backgroundColor: 'white',
        borderTopLeftRadius:50,
        borderTopRightRadius:50, 
        zIndex: 0,
    },
    
 });