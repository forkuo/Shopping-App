import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet,View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginPage';
import COLORS from './Pages/colors'
import Cart from './Pages/CartScreen';


export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Stack = createStackNavigator();

  return (
 
  <NavigationContainer>
  <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
  <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    {/*<Stack.Screen name="Cart" component={Cart} />*/}
    </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }})

//   image: {
//     marginBottom: 40,
//     height:"40%",
//     width: "100%"
//   },

//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,

//     alignItems: "center",
//   },

//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },

//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },

//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#FF1493",
//   },
// });





