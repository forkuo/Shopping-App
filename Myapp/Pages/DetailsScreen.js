import React, {useState} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../variables/colors';


const DetailsScreen = ({navigation, route}) => {
  const [numOfProd, setNumOfProduct] = useState(1);
  // const [count, setCount] = useState(0);

  // to increase the number of product to buy
   const increment = () => {
    setNumOfProduct(numOfProd + 1);
  }

  // decrease the number of product to buy
  const decrement = () => {
    setNumOfProduct(numOfProd - 1);
  }

  //  
  const product = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" style={{color: COLORS.blue}} size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" style={{color: COLORS.blue}} size={28} />
      </View>
      <View style={style.imageContainer}>
        {/* <Image source={product.img} style={{resizeMode: 'contain', flex: 1}} /> */}
        <Image source={{uri: product.img}} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.blue}}>Read all about it!</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{product.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${product.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {product.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText} onPress={() => numOfProd > 0 ? setNumOfProduct(numOfProd - 1): setNumOfProduct(0)} >-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                {numOfProd}
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText} onPress={() => setNumOfProduct(numOfProd + 1) } >+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}
                onPress={() => navigation.navigate('Cart')}
                >
                Add to Cart
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.blue,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
