import React, { useState, useEffect } from 'react';
import colors from '../components/Colors';
import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { FlatList, StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../database/firebase';

const CardProduct = () => {

  const [products, setProducts]:any = useState([]);

  useEffect(() => {
    firebase.db.collection('products').onSnapshot((querySnapshot) => {
      const products:any = [];

      querySnapshot.docs.forEach((doc) => {
        const{calory, img, name} = doc.data();
        products.push({
          id: doc.id,
          calory,
          img,
          name,
        });
      });
      setProducts(products);
    });
  }, []);

  console.log(products)

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return (
        <FlatList
        data={products}
        renderItem={({item}) =>
        <TouchableOpacity onPress={() => navigation.navigate('Product',{productId: item.id})}style={styles.container}>
        <View style={styles.containerItem}>
          <View>
          <Text style={styles.itemTitle}>{item.name}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.itemSubtitle}>{item.calory} kcal</Text>
          <Image 
        fadeDuration={500}
        style={styles.img}
          source={{uri:item.img}} />
          </View>
        </View></TouchableOpacity>}
      />
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,

  },
  containerItem: {
    flexDirection: 'column',
    width: 164,
    height: 112,
    backgroundColor: colors.variantWhite,
    padding: 16,
    borderRadius: 6,
    justifyContent: 'space-between'

   },
  itemTitle: {
    fontSize: 14,
    fontFamily:'Montserrat_400Regular',
  },
  itemSubtitle: {
    fontSize: 10,
    marginTop: 8,
    fontFamily:'Montserrat_400Regular',
    textTransform: 'uppercase'
  },
  img: {
    width: 100,
    height: 75,
  }
});

export default CardProduct;