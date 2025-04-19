import React from "react";
import { View,Text, SafeAreaView, TouchableOpacity, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native";


export default function Admin (){

    const navigation = useNavigation();
    
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/naranja2.png")} style={styles.imageHeader} />
                
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.touch}>
                    <Text style={styles.headerText}>Bienvenido</Text>
                </TouchableOpacity>
            </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        mode= "outlined"
                        style={styles.button}
                        textColor="black"
                        onPress={()=> navigation.navigate('ToolsApproval')}
                    >
                           <Text style={styles.textOp} > Aprobación de herramientas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                     mode= "outlined"
                     style={styles.button}
                     textColor="black"
                     onPress={()=> navigation.navigate('UserApproval')}
                    >
                       <Text style={styles.textOp} > Aprobación de usuarios</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = {
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems : 'center',
    },
    header:{
        position: 'relative',
        backgroundColor: '#FF7F11',
        width: '110%',
        height: 160,
        paddingVertical : 20,
        alignItems: 'center',
        borderBottomLeftRadius: 500,
        borderBottomRightRadius: 500,
    },
    headerText:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
        zIndex: 1,
        fontFamily:'Montserrat_400Regular'
    },
    
    buttonContainer:{
        marginTop:50,
        width: '80%',
        height: 150,
    },
    button:{
        borderColor: '#FF7F11',
        borderWidth: 2,
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 5,
        alignItems:'center'
        
    },

    imageHeader:{
        width:90,
        height:80,
        position: 'absolute',
        left: 28,
        top: 10,
        zIndex: 0
        
    },

    textOp:{
        color: 'black',
        fontFamily:'Montserrat_400Regular',
        fontSize: 20

    },

};

