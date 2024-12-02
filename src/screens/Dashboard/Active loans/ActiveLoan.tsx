import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';

import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import { Colors, FontSize, } from '../../../constants/Colors';


const ActiveLoanScreen = ({ userName = "UserName" }) => {

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
      { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightGray },
    ]}
  >
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <View style={[styles.topSection,
     { backgroundColor: isDarkMode ? Colors.blue : Colors.blue }]}>
      <Text
        style={[
          styles.heading,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Welcome {userName}
      </Text>
      <Ionicons
        name="notifications-outline"
        size={24}
        color={isDarkMode ? Colors.white : Colors.black}
        style={styles.notificationIcon}
      />
    </View>
    <Text
      style={[
        styles.subText,
        { color: isDarkMode ? Colors.lightGray : Colors.mediumGray },
      ]}
    >
      Lorem ipsum dolor sit amet.
    </Text>
    <View style={[styles.bottomSection,
     { backgroundColor: isDarkMode ? Colors.darkBackground:Colors.lightBackground  }]}>
      </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
 paddingTop:5,
 paddingHorizontal:0,
  
},
topSection: {
  flex:0.2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'flex-start',
  borderBottomLeftRadius:30,
  borderBottomRightRadius:30,
},
heading: {
  fontSize: FontSize.xLarge,
  fontWeight: 'bold',
  paddingLeft:20,
  paddingTop:30,
},
notificationIcon: {
  marginRight: 8,
  paddingTop:35,
},
subText: {
 bottom:90,
 paddingLeft:20,
  fontSize: FontSize.medium,
  alignItems:'center',
},
bottomSection:{
  flex:0.8,
}
});

export default ActiveLoanScreen;