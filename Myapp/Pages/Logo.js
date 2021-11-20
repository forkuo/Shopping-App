import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Using arrow function for the main App
const Logo = ({title}) => {
  return(
    <View style={styles.logo}>
      <Text style={styles.text} >{title}</Text>
    </View>
  )
}

export default Logo;

const styles = StyleSheet.create({
  logo: {
    height: 150,
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 100 / 2,
    // transform: [{ rotate: "45deg" }],
  },

  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    
  }
});
