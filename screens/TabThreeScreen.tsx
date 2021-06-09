import * as React from 'react';
import { StyleSheet,TouchableOpacity, Alert, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';
import { Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';

export default function TabThreeScreen() {
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
        <Text style={styles.title}>Veamos tus cartas</Text>
        <Text style={styles.subtitle}>Recetas e ingredientes</Text>
        <Text style={styles.text}>Aquí encontrarás todas tus cartas con las que puedes hacer juego. Además de visualizar las recetas que has descubierto.</Text>
        </View>
        <Image style={styles.icon}
        source={require('../assets/images/lupa.png')} />
        <Image style={styles.img}
          source={require('../assets/images/card3.png')} />
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>COMBINAR</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#7BDFF2',
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
    backgroundColor: '#194574',
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
    marginTop: 60,
    marginBottom: 60
  },
  icon: {
    position: 'absolute',
    width: 44,
    height: 44,
    left: '71.73%',
    right: '12.27%',
    top: '45.67%',
    bottom: '58.55%',
  }
});