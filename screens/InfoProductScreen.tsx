import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image,ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';

import colors from '../components/Colors';

import { useFonts,Comfortaa_400Regular} from '@expo-google-fonts/comfortaa';
import { NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';
import { Montserrat_400Regular} from '@expo-google-fonts/montserrat';

import { RootStackParamList } from '../types';

export default function InfoProductScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'InfoProduct'>) {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    NunitoSans_600SemiBold,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Más Información</Text>
        </View>
        <View >
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Product')}>
          <Image style={styles.icon}
          source={require('../assets/images/close.png')} />
        </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.subtitle}>Otros Nombres:</Text>
        <Text style={styles.description}>En Perú es conocida como "Gamitana", en Colombia y Venezuela "Cachama negra", 
        en Brasil "Tambaquí" y en Bolivia "Pacu". (Agrotendencia, 2019)
        </Text>
        <Text style={styles.subtitle}>Origen:</Text>
        <Text style={styles.description}>Las primeras experiencias en el cultivo de 
        Colossoma macropomun se iniciaron en Manaus, Brasil, cuando en 1966 fueron capturados ejemplares adultos del medio natural y 
        acopiados en instalaciones para reservorio de aguas en el estado de Ceará. en 1972se logró la reproducción inducida en 
        Venezuela, más tarde hacia 1982 en Perú y para 1984 en Colombia (Agrotendencia, 2019).
        </Text>
        <Text style={styles.subtitle}>Morfología:</Text>
        <Text style={styles.description}>Las Cachama negra posee una morfología bien definida, es de color gris pardo, aunque su abdomen resalta teñido de un tono anaranjado oscuro, que va desde la aleta anal hasta la mandíbula inferior la cual es achatadaesto impide que los dientes sean visibles si mantienen la boca cerrada, sus fosas nasales son muy prominentes, sus ojos son poco saltones puede girarlos hasta 180º en horizontal y de forma independiente, su cuerpo es bastante corpulento.
        (Ochoa & Cedeño, 2009)
        </Text>
        <Text style={styles.subtitle}>Temporada de siembra y cosecha:</Text>
        <Text style={styles.description}>La cachama es un pez reofílico que se reproduce anualmente en la época que coincide con las primeras lluvias, crecidas de los ríos, zonas recién inundadas, que en nuestro
        país ocurre en los meses de Abril, Mayo, Junio y Julio. puede realizarse la cosecha a partir de los 6 meses con cachamas que promedian pesos entre los 
        0.8 a 1.3 Kgrs.
        (Martinez, 2016)
        </Text>
        <Text style={styles.subtitle}>Zona de Producción:</Text>
        <Text style={styles.description}>Provincias de Morona Santiago, Sucumbíos, Orellana, Napo, Pastaza, y Zamora Chinchipe.
        (agricultura, s.f.)
        </Text>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 64,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 24,
    fontFamily: 'Comfortaa_400Regular',
  },
  subtitle: {
    fontSize: 22,
    fontFamily: 'NunitoSans_600SemiBold',
  },
  description: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.variantWhite
  },
  icon:{
    width: 24,
    height: 24
  },
  scroll:{
    flex: 1,
    marginTop: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});