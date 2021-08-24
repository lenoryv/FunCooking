import * as React from 'react';
import { StyleSheet,TouchableOpacity, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import colors from '../components/Colors';
import { Text, View} from '../components/Themed';
import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';
import { Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';


export default function TabOneScreen() {


  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    NunitoSans_600SemiBold,
    Comfortaa_400Regular,
    Montserrat_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>¿Deseas preparar algo?</Text>
        <Text style={styles.subtitle}>Vamos a jugar</Text>
        <Text style={styles.text}>Combina tus cartas que son ingredientes para descubrir recetas de comidas y bebidas. Puedes escoger cualquier carta, pero ten cuidado con lo que podrías mezclar.</Text>
        </View>
        <Image style={styles.icon}
        source={require('../assets/images/iconcombinar.png')} />
        <Image 
        fadeDuration={1000}
        style={styles.img}
          source={require('../assets/images/card.png')} />
        <TouchableOpacity onPress={() => handleHelpPress()}
        style={styles.button}>
          <Text style={styles.textButton}>COMBINAR</Text></TouchableOpacity>
      </View>
  );
}
const Stack = createStackNavigator<RootStackParamList>();

function handleHelpPress() {
  return (
    <View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.backGround1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: '37%',
    justifyContent:'flex-start',
    paddingTop: 12,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  title: {
    fontSize: 24,
    fontFamily:'Comfortaa_400Regular',
    paddingHorizontal: 24,
    paddingBottom: 24
  },
  subtitle: {
    fontSize: 22,
    fontFamily:'NunitoSans_600SemiBold',
    paddingHorizontal: 24,
    paddingBottom: 16
  },
  text: {
    fontSize: 14,
    fontFamily:'Montserrat_400Regular',
    paddingHorizontal: 24,
  },
  button:{
    width: 160,
    height: 40,
    backgroundColor: '#784729',
    borderRadius: 20,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
    color: '#ffffff'
  },
  img: {
    width: 172,
    height:172,
    marginTop: 100,
    marginBottom: 48
  },
  icon: {
    position: 'absolute',
    width: 55,
    height: 40,
    left: '71.73%',
    right: '12.27%',
    top: '50.67%',
    bottom: '58.55%',
  }
});
