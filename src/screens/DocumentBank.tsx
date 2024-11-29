import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DocumentBankScreen = ({ navigation }: any) => {
  const [documents, setDocuments] = useState([
    { id: '1', name: 'Cancel Signature' },
    { id: '2', name: 'Clear' },
  ]);

  const handleImageUpload = () => {
    console.log('Open file picker for document upload');
  };

  const colorScheme = useColorScheme();
  const themeStyles: any = colorScheme === 'dark' ? styles.dark : styles.light;

  return (
    <View style={[styles.container, themeStyles.container]}>
     
      <Appbar.Header style={[themeStyles.appbar, { paddingTop: 0 }]}>
        <MaterialCommunityIcons
          name="arrow-left"
          color={colorScheme === 'dark' ? '#fff' : '#000'} 
          size={30}
          onPress={() => navigation.goBack()}
          style={styles.backArrow}
        />
      </Appbar.Header>

    
      <View style={themeStyles.topSection}>
        <TouchableOpacity onPress={handleImageUpload}>
          <Image
            source={require('../images/BankDocument.png')}
            style={themeStyles.uploadImage}
          />
        </TouchableOpacity>
        <Text style={themeStyles.heading}>Document for Upload</Text>
        <Text style={themeStyles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit facilisis lorem.
        </Text>
      </View>

     
      <View style={themeStyles.bottomSection}>
        <View style={themeStyles.buttonRow}>
          <TouchableOpacity>
            <Text style={themeStyles.flatListItem}>Signature</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={themeStyles.flatListItem}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={themeStyles.signatureBox}>
          <Text style={themeStyles.signaturePlaceholder}></Text>
        </View>

        <TouchableOpacity
          style={themeStyles.nextButton}
          onPress={() => navigation.navigate('ApplicationSubmit')}
        >
          <Text style={themeStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    container: {
      backgroundColor: 'rgb(205, 209, 228)',
    },
    appbar: {
      backgroundColor: 'transparent',
      height: 60,
      justifyContent: 'center',
    },
    topSection: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    uploadImage: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#000',
    },
    loremText: {
      textAlign: 'center',
      fontSize: 14,
      color: '#555',
    },
    bottomSection: {
      flex: 0.5,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'space-between',
    },
    flatListItem: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
      color: '#333',
      textAlign: 'center',
    },
    buttonRow: {
      paddingLeft: 40,
      paddingRight: 70,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    signatureBox: {
      height: 200,
      backgroundColor: '#f8f8f8',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      marginTop: -40,
    },
    signaturePlaceholder: {
      color: '#aaa',
      fontSize: 16,
    },
    nextButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 12,
      borderRadius: 10,
      alignSelf: 'center',
      width: '80%',
      marginBottom: 60,
    },
    nextButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
  dark: {
    container: {
      backgroundColor: '#121212',
    },
    appbar: {
      backgroundColor: 'transparent',
      height: 60,
      justifyContent: 'center',
    },
    topSection: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    uploadImage: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#fff',
    },
    loremText: {
      textAlign: 'center',
      fontSize: 14,
      color: '#ddd',
    },
    bottomSection: {
      flex: 0.5,
      backgroundColor: '#312f2f',
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'space-between',
    },
    flatListItem: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
      color: '#ccc',
      textAlign: 'center',
    },
    buttonRow: {
      paddingLeft: 40,
      paddingRight: 70,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    signatureBox: {
      height: 200,
      backgroundColor: '#C4C3D0',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#555',
      marginTop: -40,
    },
    signaturePlaceholder: {
      color: '#aaa',
      fontSize: 16,
    },
    nextButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 12,
      borderRadius: 10,
      alignSelf: 'center',
      width: '80%',
      marginBottom: 60,
    },
    nextButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
  backArrow: {
    position: 'absolute',
    left: 10,
    top: -1, 
  },
});

export default DocumentBankScreen;
