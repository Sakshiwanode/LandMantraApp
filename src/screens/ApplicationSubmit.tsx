import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ApplicationSubmitScreen = ({ navigation }: any) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      {/* Appbar with back arrow */}
      <Appbar.Header style={styles.appbar}>
        <MaterialCommunityIcons
          name="arrow-left"
          color={colorScheme === 'dark' ? '#fff' : '#000'} 
          size={30}
          onPress={() => navigation.goBack()}
          style={styles.backArrow} 
        />
      </Appbar.Header>

      <View style={styles.mainContent}>
        <Text style={styles.heading}>Hey User!!!</Text>
        <Text style={styles.subheading}>Application created successfully for Loan</Text>
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada lectus nec felis auctor, non tempor mi volutpat. Aenean lacinia odio id ex lacinia euismod. Quisque vulputate, dui vel sollicitudin fringilla, felis dui fermentum sapien, in efficitur justo nisl non nulla.
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next Steps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(205, 209, 228)',
  },
  appbar: {
    backgroundColor: 'transparent',
  },
  backArrow: {
    position: 'absolute',
    left: 10,
    top: -1,
  },
  mainContent: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  loremText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
  bottomSection: {
    flex: 0.3,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161515',
  },
  appbar: {
    backgroundColor: 'transparent',
  },
  backArrow: {
    position: 'absolute',
    left: 10,
    top: -1,
  },
  mainContent: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  loremText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#bbb',
  },
  bottomSection: {
    flex: 0.3,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
  },
  button: {
    backgroundColor: '#1a1919',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ApplicationSubmitScreen;
