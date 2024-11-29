import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { theme, isDarkTheme } from '../Redux/AuthSlice'; // Importing theme from Redux
import { Colors } from '../constants/Colors';

const UserDetailScreen = ({ navigation }: any) => {
  

  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(colorScheme)); 
  }, [colorScheme, dispatch]);

  const user = {
    name: "John Doe",
    phone: "+91 223 344 4454",
    email: "johndoe@example.com",
    aadharOrPan: "Aadhar: 1234 5678 9123",
    otherDetails: "Loan Status: Applied\nCredit Score: 750\nLoan Amount: ₹1,00,000",
  };




  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
      <View style={[styles.topSection]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            size={30}
            color={isDarkMode ? Colors.white : Colors.black}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: isDarkMode ? Colors.accent : Colors.primary }]}>User Details</Text>
      </View>

      <View style={[styles.infoSection, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground }]}>
        <Text style={[styles.userName, { color: isDarkMode ? Colors.accent : Colors.primary }]}>{user.name}</Text>
        <Text style={[styles.phoneNumber, { color: isDarkMode ? Colors.accent : Colors.primary }]}>{user.phone}</Text>

        <View style={styles.detailsSection}>
          <Text style={[styles.detailsLabel, { color: isDarkMode ? Colors.accent : Colors.primary }]}>Email Address:</Text>
          <Text style={[styles.detailsText, { color: isDarkMode ? Colors.lightGray : Colors.gray }]}>{user.email}</Text>

          <Text style={[styles.detailsLabel, { color: isDarkMode ? Colors.accent : Colors.primary }]}>Aadhar/PAN Number:</Text>
          <Text style={[styles.detailsText, { color: isDarkMode ? Colors.lightGray : Colors.gray }]}>{user.aadharOrPan}</Text>

          <Text style={[styles.detailsLabel, { color: isDarkMode ? Colors.accent : Colors.primary }]}>Other Details:</Text>
          <Text style={[styles.detailsText, { color: isDarkMode ? Colors.lightGray : Colors.gray }]}>{user.otherDetails}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: isDarkMode ? Colors.accent : Colors.primary }]}
        onPress={() => { navigation.navigate('BankDetail') }}
      >
        <Text style={[styles.backButtonText, { color: Colors.white }]}>Forward</Text>
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
