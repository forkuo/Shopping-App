import React, {useState} from "react";
//rimport Lottie from "lottie-react-native";
import {View, Text, StatusBar, FlatList, Image, ActivityIndicator,SafeAreaView,ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// custom imports
import COLORS from "./colors";

const Cart = ({ navigation, route }) => {
  const [cart, setCart] = useState([...route.params.cart]); // spreading the cart items
  const [loading, setLoading] = useState(false);

  let lottieRef = null;

  React.useEffect(() => {
    if (lottieRef !== null) lottieRef.play();
  });

  function getTotalPrice() {
    let price = 0.0;
    for (var i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }
    return price;
  }
  return (
    <View style={{ paddingHorizontal: 20, flex: 1,marginTop:18,backgroundColor:'white' }}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <Text
        style={{ textAlign: "center", fontSize: 25,fontWeight:'bold' }}>
        Added Items
      </Text>

      {route.params.cart.length == 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center",paddingTop:'50%' }}>
         
          <Text style={{ fontSize: 18 }}>
            Your Cart is Empty!
          </Text>
        </View>
      ) : (
        <View>
          <View style={{height:'83%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ paddingVertical: 10 }}
            data={cart}
            renderItem={({ item, index }) => (
              <View
                  style={{
                    flex:1,
                    margin: 5,
                    padding: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}>
                <Image
                style={{ height: 100, width: 100, resizeMode:'contain' }}
                source= {item.img}/>
                <View style={{ flex: 1, paddingHorizontal: 10,marginTop:10}}>
                  <View>
                    <Text style={{color:'orange'}}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={{color: 'red', flexDirection:'row',marginTop:5}}>
                  <Text >
                    Name:
                  </Text>                
                  <Text style={{}}>
                      {" "}
                      {item.name}
                  </Text>
                  </View>
                  <View style={{flexDirection:'row',paddingTop:5}}>
                  <Text>
                    Price:
                  </Text>
                  
                  <View style={{}}>
                  <Text style={{}}>
                      {" "}
                      ${item.price}
                  </Text>
                  </View>
                  </View>
                </View>
              </View>
            )}/>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: COLORS.red,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              borderRadius:10,
              marginBottom: 10
            }}
          >
            <Text style={{  fontSize: 24 }}>
              {" "}
              Total Items: {route.params.cart.length}
            </Text>
            <Text style={{ fontSize: 24 }}>
              {" "}
              <Text style={{ color: "orange" }}>$</Text>
              {getTotalPrice}
              {/* {getTotalPrice().toFixed(2)} */}
            </Text>
          </View>

          <TouchableOpacity
            disabled={loading ? true : false}
            style={{ backgroundColor: COLORS.red, marginHorizontal:100,padding:10,borderRadius:10 }}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Checkout')
              setLoading(!loading);
            }}
          >
            <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Checkout
              </Text>
           
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Cart;