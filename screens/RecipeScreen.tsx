import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import AppLoading from 'expo-app-loading';

import colors from '../components/Colors';

import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import { useFonts,Comfortaa_400Regular} from '@expo-google-fonts/comfortaa';
import { NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans';
import { Montserrat_400Regular, Montserrat_500Medium} from '@expo-google-fonts/montserrat';


import { RootStackParamList } from '../types';

export default function RecipeScreen({
  navigation,
  
}: StackScreenProps<RootStackParamList, 'Product'>) {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    Comfortaa_400Regular,
    Montserrat_400Regular,
    Montserrat_500Medium

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topper}>
        <TouchableOpacity onPress={() => navigation.replace('Colection')} style={styles.button}>
         <Image style={styles.icon}
          source={require('../assets/images/back.png')} />
        </TouchableOpacity>
        </View>
        <View>
        <Image style={styles.img}
        source={require('../assets/images/recipe1.png')} />
        </View>
      </View>
    <View style={styles.containerWhite}>
        <View style={styles.containerList}>
            <View style={styles.lineStyle}></View>
             <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonHeart}>
         <Image style={styles.iconHeart}
          source={require('../assets/images/buttonHeart.png')} />
        </TouchableOpacity>
        
            </View>

                <ScrollView style={styles.safeArea}>
                <Text style={styles.h5}>Receta de Robalo</Text>
                <Text style={styles.subtitle}>Nombre Completo</Text>
                <View style={styles.containerText}>
                <Text style={styles.body}>Robalo con chips de papa y espárragos</Text>
                </View>
                <View style={styles.containerOptional}>
                    <View style={styles.valuesOptional}>
                    <Text style={styles.subtitle}>Tiempo</Text>
                <View style={styles.containerText}>
                <Text style={styles.body}>120 min</Text>
                </View>
                    </View>
                    <View style={styles.valuesOptional}>
                    <Text style={styles.subtitle}>Dificultad</Text>
                <View style={styles.containerText}>
                <Text style={styles.body}>Media</Text>
                </View>
                    </View>
                </View>
                <Text style={styles.subtitle}>Utensilios</Text>
                <View style={styles.containerValues}>
                    <View style={styles.containerText}>
                <Text style={styles.body}>Batidor fránces</Text>
                </View>
                <View style={styles.containerText}>
                <Text style={styles.body}>Sartén</Text>
                </View>
                </View>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.replace('Preparate')} style={styles.buttonCombinar}>
                <Text style={styles.buttonText}>Preparar</Text>
                </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.variantWhite,
  },
  safeArea:{
    flex: 1,
    marginBottom: 24,
    width: '100%',
  },
  containerWhite:{
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor:'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  containerOptional:{
    flexDirection:'row',
    width: '100%',
    height: 'auto',
  },
  valuesOptional: {
    width: '50%',
    marginRight: 16,
  },
  containerList: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  containerValues: {
    marginTop: 8,
    flexDirection: 'row',
    width: '100%',
    flexWrap: "wrap",
    alignContent: 'space-between',
    height:'auto',
  },
  value:{
    flexDirection: 'column',
    width: 96,
    height: 56,
    backgroundColor:colors.variantWhite,
    borderRadius: 6,
    marginRight: 16,
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 34,
    fontFamily:'Comfortaa_400Regular'
  },
  subtitle: {
    marginTop: 16,
    fontSize: 17,
    fontFamily:'NunitoSans_400Regular'
  },
  body: {
    fontSize: 16,
    fontFamily:'Montserrat_400Regular'
  },
  buttonText: {
    fontSize: 14,
    fontFamily:'Montserrat_500Medium',
    color: 'white',
    textTransform: 'uppercase'
  },
  h5: {
    fontSize: 24,
    fontFamily:'Comfortaa_400Regular'
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    height: 368,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 64,
    justifyContent: 'space-between',
    alignItems:'center',
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor:'white'
  },
  buttonCombinar: {
    width: 152,
    height: 40,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: colors.secundary
  },
  buttonHeart: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    borderRadius: 20,
  },
  containerButton:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end'
  },
  containerText:{
    marginTop: 8,
    marginRight: 16,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: 'center',
    backgroundColor:colors.variantWhite,
    borderRadius: 6
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconHeart: {
    width: 24,
    height: 23,
  },
  img: {
    width: 240,
    height: 240,
  },
  lineStyle:{
    width: 96,
    marginTop: 16,
    borderWidth: 4,
    borderRadius: 4,
    borderColor:colors.secundary,
}
});