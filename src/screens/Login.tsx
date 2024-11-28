import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, useColorScheme } from 'react-native';

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#fcf7f7',
  inputBackgroundColor: '#fff',
  buttonBackgroundColor: '#f9fbfc',
  buttonTextColor: '#0f0d0d',
  borderColor: 'rgba(0, 0, 0, 0.2)',
  bottomSectionBackgroundColor: 'rgba(0, 124, 255, 0.9)',
  placeholder: "#333"
};

const darkTheme = {
  backgroundColor: '#f7f4f4',
  textColor: '#fff',
  inputBackgroundColor: '#333',
  buttonBackgroundColor: '#333',
  buttonTextColor: '#fff',
  borderColor: 'rgba(255, 255, 255, 0.2)',
  bottomSectionBackgroundColor: 'rgba(0, 124, 255, 0.9)',
  placeholder: "#c9c5c5"
};

const LoginScreen = ({ navigation }: any) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.topSection}>
        <Image
          source={require('../images/mainpage.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={[styles.bottomSection, { backgroundColor: theme.bottomSectionBackgroundColor }]}>
        <Text style={[styles.mainHeading, { color: theme.textColor }]}>LandMantra</Text>
        <Text style={[styles.subHeading, { color: theme.textColor }]}>Login</Text>
        <Text style={[styles.description, { color: theme.textColor }]}>Continue to app</Text>

        <TextInput
          style={[styles.input, { backgroundColor: theme.inputBackgroundColor, color: theme.textColor, borderColor: theme.borderColor }]}
          placeholder="+91 Phone Number"
          placeholderTextColor={theme.placeholder}
          keyboardType="phone-pad"
        />

        <TouchableOpacity onPress={() => console.log('Forgot Account')}>
          <Text style={[styles.forgetText, { color: theme.textColor }]}>Forgot Account?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: theme.buttonBackgroundColor }]}
          onPress={() => navigation.navigate('OTPVerify')}
        >
          <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 80,
  },
  subHeading: {
    fontSize: 24,
    marginBottom: 10,
    paddingLeft: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 10,
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'center',
  },
  forgetText: {
    fontSize: 14,
    textAlign: 'right',
    width: '90%',
    marginBottom: 20,
    alignSelf: 'center',
  },
  nextButton: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
