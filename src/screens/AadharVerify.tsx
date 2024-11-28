import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AadharScreen = ({ navigation }: { navigation: any }) => {
  const [isAadhar, setIsAadhar] = useState(true);
  const [aadharOrPanNumber, setAadharOrPanNumber] = useState('');
  const colorScheme = useColorScheme();
  const dynamicStyles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={dynamicStyles.container}>
     
      <TouchableOpacity style={dynamicStyles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color={colorScheme === 'dark' ? '#0a0a0a' : '#000000'} />
      </TouchableOpacity>

      <View style={dynamicStyles.topSection}>
        <Image
          source={require('../images/adharotp.png')}
          style={dynamicStyles.image}
          resizeMode="cover"
        />
      </View>

      <View style={dynamicStyles.bottomSection}>
        <Text style={dynamicStyles.title}>Verify Your Identity</Text>
        <Text style={dynamicStyles.subtitle}>Select your verification method and enter the details.</Text>

        <View style={dynamicStyles.verificationToggle}>
          <TouchableOpacity onPress={() => setIsAadhar(true)} style={[dynamicStyles.toggleButton, isAadhar ? dynamicStyles.activeButton : {}]}>
            <Text style={[dynamicStyles.toggleButtonText, isAadhar ? dynamicStyles.activeButtonText : {}]}>Aadhar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsAadhar(false)} style={[dynamicStyles.toggleButton, !isAadhar ? dynamicStyles.activeButton : {}]}>
            <Text style={[dynamicStyles.toggleButtonText, !isAadhar ? dynamicStyles.activeButtonText : {}]}>PAN</Text>
          </TouchableOpacity>
        </View>

        <View style={dynamicStyles.inputContainer}>
          <Text style={dynamicStyles.inputLabel}>{isAadhar ? 'Aadhar Number' : 'PAN Number'}</Text>
          <TextInput
            style={dynamicStyles.inputField}
            placeholder={isAadhar ? 'Enter your 12-digit Aadhar number' : 'Enter your 10-digit PAN number'}
            placeholderTextColor={colorScheme === 'dark' ? '#aaa' : '#cac1c1'} 
            keyboardType="numeric"
            maxLength={isAadhar ? 12 : 10}
            value={aadharOrPanNumber}
            onChangeText={setAadharOrPanNumber}
          />
        </View>

        <TouchableOpacity
          style={dynamicStyles.submitButton}
          onPress={() => {
            if (isAadhar) {
              navigation.navigate('AadharVerificationSuccess');
            } else {
              navigation.navigate('PanVerificationSuccess');
            }
            navigation.navigate('UserDetail');
          }}
        >
          <Text style={dynamicStyles.submitButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  topSection: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.4,
    backgroundColor: '#007BFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
  },
  verificationToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#fff',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  activeButtonText: {
    color: '#007BFF',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 5,
  },
  inputField: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  topSection: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.4,
    backgroundColor: '#000000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
  },
  verificationToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#fff',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  activeButtonText: {
    color: '#007BFF',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 5,
  },
  inputField: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AadharScreen;
