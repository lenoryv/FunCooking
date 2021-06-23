import React from 'react';
import colors from '../components/Colors';
import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { FlatList, StyleSheet, Text, View,TouchableOpacity, Image, requireNativeComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardProduct = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product')}style={styles.container}>
      <FlatList
        data={[{
          key: 'Fresas',
          cal: '25 kcal',
          img: require('../assets/images/fresas.png')
        },
        ]}
        renderItem={({item}) => 
        <View style={styles.containerItem}>
          <View>
          <Text style={styles.itemTitle}>{item.key}</Text>
          <Text style={styles.itemSubtitle}>{item.cal}</Text>
          </View>
          <View>
          <Image 
        fadeDuration={1000}
        style={styles.img}
          source={item.img} />
          </View>
        </View>}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,

  },
  containerItem: {
    flexDirection: 'row',
    width: '45%',
    height: 112,
    backgroundColor: colors.variantWhite,
    padding: 16,
    borderRadius: 6,
    justifyContent: 'space-between'

   },
  itemTitle: {
    fontSize: 14,
    fontFamily:'Montserrat_400Regular',
    textTransform: 'uppercase'
  },
  itemSubtitle: {
    fontSize: 10,
    marginTop: 8,
    fontFamily:'Montserrat_400Regular',
    textTransform: 'uppercase'
  },
  img: {
    width: 80,
    height: 80,
  }
});

export default CardProduct;