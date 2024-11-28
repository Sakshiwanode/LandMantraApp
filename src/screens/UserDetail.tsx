import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const UserDetailScreen = ({ navigation }: any) => {
  const user = {
    name: "John Doe",
    phone: "+91 223 344 4454",
    email: "johndoe@example.com",
    aadharOrPan: "Aadhar: 1234 5678 9123",
    otherDetails: "Loan Status: Applied\nCredit Score: 750\nLoan Amount: ₹1,00,000",
  };

  const colorScheme = useColorScheme();

  const themeColors = {
    background: colorScheme === 'dark' ? '#121212' : '#fff',
    text: colorScheme === 'dark' ? '#fff' : '#000',
    accent: colorScheme === 'dark' ? '#1E90FF' : '#007BFF',
    cardBackground: colorScheme === 'dark' ? '#333' : '#dad9d9',
    cardText: colorScheme === 'dark' ? '#ccc' : '#333',
    buttonBackground: colorScheme === 'dark' ? '#1E90FF' : '#007BFF',
    buttonText: '#fff',
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={[styles.topSection]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            size={30}
            color={themeColors.text}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: themeColors.accent }]}>User Details</Text>
      </View>

      <View style={[styles.infoSection, { backgroundColor: themeColors.cardBackground }]}>
        <Text style={[styles.userName, { color: themeColors.accent }]}>{user.name}</Text>
        <Text style={[styles.phoneNumber, { color: themeColors.accent }]}>{user.phone}</Text>

        <View style={styles.detailsSection}>
          <Text style={[styles.detailsLabel, { color: themeColors.accent }]}>Email Address:</Text>
          <Text style={[styles.detailsText, { color: themeColors.cardText }]}>{user.email}</Text>

          <Text style={[styles.detailsLabel, { color: themeColors.accent }]}>Aadhar/PAN Number:</Text>
          <Text style={[styles.detailsText, { color: themeColors.cardText }]}>{user.aadharOrPan}</Text>

          <Text style={[styles.detailsLabel, { color: themeColors.accent }]}>Other Details:</Text>
          <Text style={[styles.detailsText, { color: themeColors.cardText }]}>{user.otherDetails}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: themeColors.buttonBackground }]}
        onPress={() => { navigation.navigate('BankDetail') }}
      >
        <Text style={[styles.backButtonText, { color: themeColors.buttonText }]}>Forward</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30, 
    position: 'relative', 
  },
  backIcon: {
    position: 'absolute', 
    left: 0,
    marginTop: -70,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
    marginTop: 90,
  },
  infoSection: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsSection: {
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 15,
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 18,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserDetailScreen;
