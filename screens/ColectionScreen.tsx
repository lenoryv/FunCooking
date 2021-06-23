import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import AppLoading from 'expo-app-loading';

import colors from '../components/Colors';

import { StyleSheet, Text, TouchableOpacity, View, Image,} from 'react-native';
import { useFonts,Comfortaa_400Regular} from '@expo-google-fonts/comfortaa';
import { NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';

import { RootStackParamList } from '../types';

import CardProduct from '../components/CardProduct'
import CardRecipe from '../components/CardRecipe'
import { SafeAreaView } from 'react-native-safe-area-context';




export default function ColectionScreen({
  navigation,
  
}: StackScreenProps<RootStackParamList, 'Colection'>) {
  let [fontsLoaded] = useFonts({
    NunitoSans_600SemiBold,
    Comfortaa_400Regular,

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.button}>
      <Image style={styles.icon}
          source={require('../assets/images/back.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>Tu colección</Text>
      </View>
    <SafeAreaView style={styles.containerList}>
    
      <View>
      <Text style={styles.categoryText}>Producto</Text>
      </View>
      <CardProduct/>
    </SafeAreaView>
    <SafeAreaView style={styles.containerList}>
      <View>
      <Text style={styles.categoryText}>Mis recetas</Text>
      </View>
      <CardRecipe/>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 24,
  },
  containerList: {
    flex: 0.5,
    width: '100%',
  },
  title: {
    fontSize: 34,
    fontFamily:'Comfortaa_400Regular'
    
  },
  header: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: colors.primary,
  },
  categoryText: {
    fontSize: 22,
    fontFamily:'NunitoSans_600SemiBold',
    color: colors.primary,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor:colors.variantWhite
  },
  icon: {
    width: 14,
    height: 24
  }
});
