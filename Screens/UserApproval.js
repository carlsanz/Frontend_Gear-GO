import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const users= [
{
    id: 1,
    name: 'Jose Manuel Garcia',
    photo: require('../assets/JoseGarcia.jpeg'),
    idFront: require('../assets/id1.jpg'),
    idBack: require('../assets/id2.jpg')
},
];

export default function UserApproval(){

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
                    <Text style={styles.headerText}> Aprobación de Usuarios </Text>
                </View>

                {users.map(user=> (
                    <TouchableOpacity
                     key={user.id}
                     style={styles.userCard}
                     onPress={()=> navigation.navigate('UserDetails', {user})}>
                        <Image source={user.photo} style={styles.userImage}/>
                        <View style= {styles.userInfo}>
                            <Text style={styles.userName}>{user.name}</Text>
                            <TouchableOpacity style={styles.detailsButton} onPress={()=> navigation.navigate('UserDetails', {user})}>
                                                        <Text style={styles.textButton}>Ver detalles</Text>
                                                        </TouchableOpacity>
                        </View>
                     </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        
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
        fontSize:18,
        color:"white",
        fontWeight:'bold',
        fontFamily:'Montserrat_400Regular'
    },

    userCard:{
        flexDirection: 'row',
        backgroundColor: 'F5F5F5',
        padding: 10,
        marginVertical:10,
        borderRadius:8,
        margin:10
        
    },

    userImage:{
        width:70,
        height:70,
        
    },

    userInfo:{
        marginLeft: 10,
        justifyContent:'center'
    },

    userName:{
        fontWeight:'bold',
        fontSize:16,
        fontFamily:'Montserrat_400Regular'
    },

    detailsButton:{
        color:'#FF7F11',
        fontWeight:'bold',
        marginTop: 5
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

    detailsButton:{
        color: '#FF7F11',
        fontWeight: 'bold',
        marginTop: 20,
        left: 200,
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
})
