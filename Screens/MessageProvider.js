// context/MessageContext.js
import React, { createContext, useContext, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Crear un contexto para manejar los mensajes
const MessageContext = createContext();

// Hook para acceder al contexto en cualquier componente
export const useMessage = () => {
  return useContext(MessageContext);
};

// Proveedor del contexto que envuelve la parte de la app que necesita el mensaje
export const MessageProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true); // Si es éxito o error

  const showMessage = (message, success = true) => {
    setModalMessage(message);
    setIsSuccess(success);
    setModalVisible(true);
  };

  const hideMessage = () => {
    setModalVisible(false);
  };

  return (
    <MessageContext.Provider value={{ modalVisible, modalMessage, isSuccess, showMessage, hideMessage }}>
      {children}
      {/* Modal para mostrar los mensajes */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={hideMessage}  // Cerrar modal al presionar fuera de él
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              <FontAwesome 
                name={isSuccess ? 'check-circle' : 'times-circle'} 
                size={30} 
                color={isSuccess ? '#28a745' : '#dc3545'} 
              />
            </Text>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity onPress={hideMessage} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </MessageContext.Provider>
  );
};

// Estilos para el modal de mensaje
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  modalContainer: {
    width: 250,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#F97316',
    borderColor: '#F97316', // Color naranja
    borderWidth: 2,
    paddingHorizontal: 24,
    paddingVertical: 3,
    borderRadius: 8,

  },
  modalButtonText: {
    color: 'white', // Color naranja
    fontSize: 18,
  },
});
