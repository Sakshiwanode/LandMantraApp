import React, { useEffect } from 'react';
import { View, Text, StyleSheet, useColorScheme, BackHandler } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ userName = "UserName" }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const themeColors = {
    background: isDarkMode ? '#0c0c0c' : '#F5F5F5',
    text: isDarkMode ? '#ffffff' : '#000000',
    secondaryText: isDarkMode ? '#AAAAAA' : '#555555',
  };

 
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp(); 
      return true; 
    });
    return () => backHandler.remove();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={styles.topSection}>
        <Text style={[styles.heading, { color: themeColors.text }]}>
          Welcome {userName}
        </Text>
        <Ionicons 
          name="notifications-outline" 
          size={24} 
          color={themeColors.text} 
          style={styles.notificationIcon} 
        />
      </View>
      <Text style={[styles.subText, { color: themeColors.secondaryText }]}>
        Lorem ipsum dolor sit amet.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationIcon: {
    marginRight: 8,
  },
  subText: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default HomeScreen;
