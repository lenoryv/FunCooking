import React from 'react';
import colors from '../components/Colors';
import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { FlatList, StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CardRecipe = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Recipe')} style={styles.container}>
      <FlatList
        data={[{
          key: 'Robalo con chips de papa y espárragos',
          cal: '120 min',
          img: require('../assets/images/recipe1.png')
        },
        ]}
        renderItem={({item}) => 
        <View style={styles.containerItem}>
          <View style={styles.containerText}>
          <Text style={styles.itemTitle}>{item.key}</Text>
          <View style={styles.containerSubText}>
            <Text style={styles.itemSubtitle}>{item.cal}</Text>
            <Image 
        fadeDuration={1000}
        style={styles.icon}
          source={require('../assets/images/reloj.png')} />
          </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 112,
    backgroundColor: colors.variantWhite,
    padding: 16,
    borderRadius: 6

   },
   containerText: {
    width: '75%',
    justifyContent:'space-between'
   },
   containerSubText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
   },
  itemTitle: {
    fontSize: 14,
    fontFamily:'Montserrat_400Regular',
  },
  itemSubtitle: {
    fontSize: 10,
    fontFamily:'Montserrat_400Regular',
    textTransform: 'uppercase'
  },
  img: {
    width: 80,
    height: 80,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 16
  }
});

export default CardRecipe;