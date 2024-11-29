import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native';
import { theme, isDarkTheme } from '../Redux/AuthSlice';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, FontSize } from '../constants/Colors';

const OTPScreen = ({ navigation }: any) => {
  const [otp, setOtp] = useState(['4', '5', '', '']);
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.black : Colors.white },
      ]}
    >
      <StatusBar hidden />

      <Appbar.Header
        style={[
          styles.header,
          { backgroundColor: isDarkMode ? Colors.darkGray : Colors.lightGray },
        ]}
      >
        <Appbar.Action
          icon={() => (
            <Icon
              name="arrow-back"
              size={24}
              color={isDarkMode ? Colors.white : Colors.black}
            />
          )}
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

      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}
      >
        <Text
          style={[
            styles.mainHeading,
            { color: isDarkMode ? Colors.accent : Colors.primary },
          ]}
        >
          OTP Verification
        </Text>
        <Text
          style={[
            styles.subHeading,
            { color: isDarkMode ? Colors.gray : Colors.secondary },
          ]}
        >
          Enter the OTP sent to +91 111 333 222
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.otpInput,
                digit
                  ? { borderColor: Colors.accent }
                  : { borderColor: Colors.gray },
                {
                  color: isDarkMode ? Colors.white : Colors.black,
                  backgroundColor: isDarkMode
                    ? Colors.darkInputBackground
                    : Colors.lightInputBackground,
                },
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

        <Text
          style={[
            styles.resendText,
            { color: isDarkMode ? Colors.accent : Colors.primary },
          ]}
        >
          Didn’t receive the OTP?{' '}
          <Text
            style={[
              styles.boldText,
              { color: isDarkMode ? Colors.accent : Colors.primary },
            ]}
            onPress={() => console.log('Resend OTP')}
          >
            Resend OTP
          </Text>
        </Text>

        <TouchableOpacity
          style={[
            styles.verifyButton,
            {
              backgroundColor: isDarkMode ? Colors.accent : Colors.primary,
            },
          ]}
          onPress={() => navigation.navigate('LoanApply')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isDarkMode ? Colors.black : Colors.white },
            ]}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    elevation: 0,
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  mainHeading: {
    paddingTop:30,
    fontSize: FontSize. HeadingXl,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: FontSize.medium,
    textAlign: 'center',
    marginVertical: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 8,
    fontSize: FontSize.large,
  },
  resendText: {
    paddingBottom:20,
    textAlign: 'center',
    fontSize: FontSize.small,
    paddingTop:30,
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
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
