import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const BankDetailScreen = ({navigation}: any) => {
  const scheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        scheme === 'dark' ? styles.darkContainer : styles.lightContainer,
      ]}>
      <View style={styles.topSection}>
      
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} 
        >
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        
        <Text style={styles.topText}>Bank Details</Text>
      </View>

      <View style={styles.bottomSection}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View
            style={[
              styles.card,
              scheme === 'dark' ? styles.darkCard : styles.lightCard,
            ]}>
            <DetailRow label="Bank Name" value="ABC Bank" />
            <DetailRow label="Account Holder Name" value="John Doe" />
            <DetailRow label="Account Number" value="1234567890" />
            <DetailRow label="IFSC Code" value="ABCD0123456" />
            <DetailRow label="Customer ID" value="987654321" />
            <DetailRow label="Debit Card Number" value="1234 5678 9012 3456" />
            <DetailRow label="Mobile Number" value="+91 9876543210" />
            <DetailRow label="Email" value="johndoe@example.com" />
            <DetailRow
              label="Address"
              value="123, Main Street, City, State, PIN"
            />
            <DetailRow label="Other Details" value="Net Banking Enabled" />

            <TouchableOpacity
              style={[styles.button, styles.changeDetailsButton]}>
              <Text style={styles.buttonText}>Change Details</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View>
          <TouchableOpacity
            style={[
              styles.moveAheadButton,
              scheme === 'dark' ? styles.darkButton : styles.lightButton,
            ]}
            onPress={() => {
              navigation.navigate('DocumentBank');
            }}>
            <Text
              style={[
                styles.moveAheadText,
                scheme === 'dark'
                  ? styles.darkMoveAheadText
                  : styles.lightMoveAheadText,
              ]}>
              Move Ahead
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const DetailRow = ({label, value}: any) => (
  <Text style={styles.detailText}>
    <Text style={styles.label}>{label}: </Text>
    <Text style={styles.value}>{value}</Text>
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#1e1e1e',
  },
  topSection: {
    flex: 0.2,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative', 
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  topText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomSection: {
    flex: 0.8,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  scrollView: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  lightCard: {
    backgroundColor: 'rgb(205, 209, 228)',
  },
  darkCard: {
    backgroundColor: '#C4C3D0',
    borderRadius: 33,
  },
  detailText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  value: {
    color: 'black',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  changeDetailsButton: {
    alignSelf: 'center',
  },
  moveAheadButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 23,
    alignSelf: 'center',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  moveAheadText: {
    color: '#0f0f0f',
    fontSize: 16,
    fontWeight: 'bold',
  },

  lightMoveAheadText: {
    color: '#ffffff', 
  },
  darkMoveAheadText: {
    color: '#007BFF', 
  },

  darkButton: {
    backgroundColor: '#f3f3f5',
  },
  lightButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
  },
});

export default BankDetailScreen;
