import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar, useColorScheme } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoanScreen = ({ navigation }: { navigation: any }) => {
  const [loanAmount, setLoanAmount] = useState(40000);
  const maxLoan = 500000;

  const colorScheme = useColorScheme();
  const theme: any = colorScheme === 'dark' ? styles.darkTheme : styles.lightTheme;

  return (
    <View style={[styles.container, theme.container]}>
      <StatusBar hidden={true} />

      {/* Appbar with Back Icon */}
      <Appbar style={styles.appbar}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => navigation.goBack()}
          color="white" // Icon color
          style={styles.backIcon} // No background
        />
      </Appbar>

      <View style={[styles.topSection, theme.topSection]}>
        <Image
          source={require('../images/loanimage.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={[styles.bottomSection, theme.bottomSection]}>
        <Text style={[styles.heading, theme.heading]}>Select Loan Amount</Text>
        <Text style={[styles.subText, theme.subText]}>
          Move to effortless site to select your loans easily
        </Text>

        <View style={styles.inputContainer}>
          <Text style={[styles.currencySymbol, theme.currencySymbol]}>₹</Text>
          <TextInput
            style={[styles.loanInput, theme.loanInput]}
            keyboardType="numeric"
            value={String(loanAmount)}
            onChangeText={(text) => {
              const newAmount = Number(text);
              if (newAmount >= 100 && newAmount <= maxLoan) {
                setLoanAmount(newAmount);
              }
            }}
          />
        </View>

        <View style={styles.progressContainer}>
          <Text style={[styles.progressText, theme.progressText]}>₹100</Text>
          <View style={styles.progressBarWrapper}>
            <View style={[styles.progressBar, { width: `${(loanAmount / maxLoan) * 100}%` }]} />
          </View>
          <Text style={[styles.progressText, theme.progressText]}>₹{maxLoan.toLocaleString()}</Text>
        </View>

        <Text style={[styles.heading, theme.heading]}>Select Loan Tenure</Text>
        <Text style={[styles.subText, theme.subText]}>Choose your loan in terms of months, year</Text>
        <View style={styles.tenureContainer}>
          <Text style={theme.tenureText}>2 Years</Text>
          <Icon name="chevron-down" size={16} color="rgba(0, 0, 0, 0.5)" />
        </View>

        <TouchableOpacity
          style={[styles.continueButton, theme.continueButton]}
          onPress={() => navigation.navigate('AadharVerify')}
        >
          <Text style={styles.buttonText}>Continue to Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cancel')}>
          <Text style={[styles.cancelText, theme.cancelText]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent', // Transparent appbar
    elevation: 0, // No shadow
    zIndex: 1, // Ensure it's above the image
  },
  backIcon: {
    backgroundColor: 'transparent', // No background for the icon
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  bottomSection: {
    flex: 0.6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    paddingLeft: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  loanInput: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  progressBarWrapper: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
  },
  progressText: {
    fontSize: 12,
  },
  tenureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 15,
    marginBottom: 20,
  },
  tenureText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightTheme: {
    container: { backgroundColor: '#fff' },
    topSection: { backgroundColor: 'rgba(0, 123, 255, 0.3)' },
    bottomSection: { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
    heading: { color: '#007BFF' },
    subText: { color: 'rgba(0, 0, 0, 0.7)' },
    currencySymbol: { color: '#007BFF' },
    loanInput: { color: '#007BFF' },
    tenureText: { color: '#007BFF' },
    continueButton: { backgroundColor: '#007BFF' },
    cancelText: { color: '#007BFF' },
    progressText: { color: '#fff' },
  },
  darkTheme: {
    container: { backgroundColor: '#121212' },
    topSection: { backgroundColor: 'rgba(0, 123, 255, 0.5)' },
    bottomSection: { backgroundColor: '#1C1C1C' },
    heading: { color: '#007BFF' },
    subText: { color: 'rgba(255, 255, 255, 0.7)' },
    currencySymbol: { color: '#007BFF' },
    loanInput: { color: '#007BFF' },
    tenureText: { color: '#007BFF' },
    continueButton: { backgroundColor: '#007BFF' },
    cancelText: { color: '#007BFF' },
    progressText: { color: '#007BFF' },
  },
});

export default LoanScreen;
