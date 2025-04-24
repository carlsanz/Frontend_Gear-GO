import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const Categoria = () => {
    const categorias = [
        'Carpintería', 'Construcción', 'Electricidad', 'Fontanería', 'Mecánica',
        'Jardinería', 'Tradicionales', 'Inteligentes', 'Corte', 'Golpeo',
        'Sujeción', 'Medición', 'Perforación', 'Eléctricas', 'Manuales',
        'Soldadura', 'Fijación', 'Ensamblaje'
    ];
    const [seleccionadas, setSeleccionadas] = useState([]);

    const navigation = useNavigation();
    const toggleSeleccion = (categoria) => {
        setSeleccionadas((prev) =>
            prev.includes(categoria)
                ? prev.filter((item) => item !== categoria)
                : [...prev, categoria]
        );
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ padding: 20 }}>
                {/* Título */}
                <Text style={{ fontFamily: "Montserrat", textAlign: 'center', fontSize: 30, paddingTop: 110, paddingBottom: 20 }}>
                    ¿En qué categoría?
                </Text>

                {/* Lista de Categorías */}
                <View style={{ alignItems: 'center' }}>
                    <FlatList
                        data={categorias}
                        numColumns={3}
                        scrollEnabled={false} // Esto es importante para que el FlatList no interfiera con el ScrollView
                        keyExtractor={(item) => item}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => toggleSeleccion(item)}
                                style={{
                                    margin: 5,
                                    marginVertical: 15,
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: seleccionadas.includes(item) ? '#f97316' : 'black',
                                    backgroundColor: seleccionadas.includes(item) ? '#f97316' : 'transparent'
                                }}
                            >
                                <Text style={{ color: seleccionadas.includes(item) ? 'white' : '#f97316' }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Botones de acción */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 100 }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'black',
                        paddingVertical: 12,
                        paddingHorizontal: 20,
                        borderRadius: 10
                    }}
                    
                    onPress={() => navigation.navigate('ToolBoxAgg')}
                    
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#fbc02d',
                        paddingVertical: 12,
                        paddingHorizontal: 20,
                        borderRadius: 10
                    }}
                    
                    onPress={() => navigation.navigate('ToolBoxAgg')}
                    
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Enviar para aprobación</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Categoria;
