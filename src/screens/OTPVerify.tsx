import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OTPScreen = ({ navigation }: any) => {
  const [otp, setOtp] = useState(['4', '5', '', '']);
  const theme = useColorScheme();

  const colors = theme === 'dark' ? darkTheme : lightTheme;
  const iconColor = theme === 'dark' ? darkTheme.icon : lightTheme.icon;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar hidden={true} />

     
      <Appbar.Header style={[styles.header, { backgroundColor: colors.header }]}>
        <Appbar.Action
          icon={() => <Icon name="arrow-back" size={24} color={iconColor} />}
          onPress={() => navigation.goBack()}
        />
      
      </Appbar.Header>

      <View style={styles.topSection}>
        
        <Image
          source={require('../images/Otpverify.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={[styles.bottomSection, { backgroundColor: colors.bottomSection }]}>
        <Text style={[styles.mainHeading, { color: colors.primaryText }]}>OTP Verification</Text>
        <Text style={[styles.subHeading, { color: colors.secondaryText }]}>
          Enter the OTP sent to +91 111 333 222
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.otpInput,
                digit ? styles.filledInput : styles.emptyInput,
                { borderColor: colors.inputBorder, color: colors.inputText },
              ]}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => {
                const newOtp = [...otp];
                newOtp[index] = text;
                setOtp(newOtp);
              }}
            />
          ))}
        </View>

        <Text style={[styles.resendText, { color: colors.primaryText }]}>
          Didn’t receive the OTP?{' '}
          <Text
            style={[styles.boldText, { color: colors.primaryText }]}
            onPress={() => console.log('Resend OTP')}
          >
            Resend OTP
          </Text>
        </Text>

        <TouchableOpacity
          style={[styles.verifyButton, { backgroundColor: colors.buttonBackground }]}
          onPress={() => navigation.navigate('LoanApply')}
        >
          <Text style={[styles.buttonText, { color: colors.buttonText }]}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const lightTheme = {
  background: '#fff',
  bottomSection: 'rgba(124, 255, 0.9)',
  primaryText: '#007BFF',
  secondaryText: 'rgba(0, 0, 0, 0.7)',
  inputBorder: 'rgba(0, 0, 0, 0.3)',
  inputText: '#007BFF',
  buttonBackground: '#007BFF',
  buttonText: '#fff',
  header: '#f5f5f5',
  icon: '#000',
};

const darkTheme = {
  background: '#121212',
  bottomSection: 'rgba(0, 0, 0, 0.8)',
  primaryText: '#007BFF',
  secondaryText: '#E1E1E1',
  inputBorder: '#a3a0a7',
  inputText: '#f1edf7',
  buttonBackground: '#ffffff',
  buttonText: '#131111',
  header: '#f5f5f5',
  icon: '#0c0b0b',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
   backgroundColor:'transparent',
    paddingBottom:60,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  topSection: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '200%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 90,
    borderRadius: 32,
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 8,
  },
  filledInput: {
    borderColor: '#007BFF',
  },
  emptyInput: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  resendText: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
