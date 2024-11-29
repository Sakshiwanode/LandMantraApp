import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { isDarkTheme, theme } from '../Redux/AuthSlice';
import { Colors, FontSize } from '../constants/Colors';

const LoginScreen = ({ navigation }: any) => {
  const isDarkMode = useSelector(isDarkTheme);
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();

 
  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.white : Colors.white },
      ]}
    >
      <View style={styles.topSection}>
        <Image
          source={require('../images/mainpage.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View
        style={[
          styles.bottomSection,
          { backgroundColor: Colors.primary },
        ]}
      >
        <Text
          style={[
            styles.mainHeading,
            { color: isDarkMode ?  Colors.black:Colors.white  },
          ]}
        >
          LandMantra
        </Text>
        <Text
          style={[
            styles.subHeading,
            { color: isDarkMode ? Colors.black:Colors.white },
          ]}
        >
          Login
        </Text>
        <Text
          style={[
            styles.description,
            { color: isDarkMode ? Colors.black:Colors.white },
          ]}
        >
          Continue to app
        </Text>

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDarkMode ? Colors.gray : Colors.white,
              color: isDarkMode ? Colors.white : Colors.gray,
              borderColor: isDarkMode ? Colors.placeholderDark : Colors.placeholderLight,
            },
          ]}
          placeholder="+91 Phone Number"
          placeholderTextColor={
            isDarkMode ? Colors.placeholderDark : Colors.placeholderLight
          }
          keyboardType="phone-pad"
        />

        <TouchableOpacity onPress={() => console.log('Forgot Account')}>
          <Text
            style={[
              styles.forgetText,
              { color: isDarkMode ?Colors.black:Colors.white },
            ]}
          >
            Forgot Account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.nextButton,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.secondary,
            },
          ]}
          onPress={() => navigation.navigate('OTPVerify')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isDarkMode ? Colors.placeholderDark : Colors.placeholderLight},
            ]}
          >
            Next
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
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: FontSize.subHeading,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: FontSize.description,
    marginBottom: 20,
    textAlign: 'center',
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
    fontSize: FontSize.medium,
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
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
