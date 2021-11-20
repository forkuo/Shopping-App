import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Using arrow function for the main App
const Header = ({title}) => {
  return(
    <View style={styles.header}>
      <Text style={styles.text} >{title}</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: '100%',
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    
  }
});
