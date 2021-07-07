import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image,ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';

import colors from '../components/Colors';

import { useFonts,Comfortaa_400Regular} from '@expo-google-fonts/comfortaa';
import { NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';
import { Montserrat_400Regular} from '@expo-google-fonts/montserrat';

import { RootStackParamList } from '../types';

export default function PreparatetScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Preparate'>) {
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
          <Text style={styles.title}>Ingredientes</Text>
        </View>
        <View >
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Recipe')}>
          <Image style={styles.icon}
          source={require('../assets/images/close.png')} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.listText}>1000g de cachama en filete</Text>
        <Text style={styles.listText}>30g de ajies picantes</Text>
        <Text style={styles.listText}>10g. de achiote en grano</Text>
        <Text style={styles.listText}>100ml aceite (canola ó girasol)</Text>
        <Text style={styles.listText}>40g cebolla roja</Text>
        <Text style={styles.listText}>10g dientes de ajo</Text>
        <Text style={styles.listText}>50ml vinagre blanco</Text>
        <Text style={styles.listText}>Sal marina y pimienta</Text>
        <Text style={styles.listText}>Yuca cocida como acompañante</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Elaboración</Text>
        <Text style={styles.subtitle}>Procedimiento 1</Text>
        <Text style={styles.description}>Procedemos a Cortar las papas 
        en rebanadas delgadas; Las salteamos hasta que estén 
        doradas, retiramos en una rejilla, salpimentamos y reservamos
        </Text>
        <Text style={styles.subtitle}>Procedimiento 2</Text>
        <Text style={styles.description}>Procedemos a Cortar las papas 
        en rebanadas delgadas; Las salteamos hasta que estén 
        doradas, retiramos en una rejilla, salpimentamos y reservamos
        </Text>
        <Text style={styles.subtitle}>Procedimiento 3</Text>
        <Text style={styles.description}>Procedemos a Cortar las papas 
        en rebanadas delgadas; Las salteamos hasta que estén 
        doradas, retiramos en una rejilla, salpimentamos y reservamos
        </Text>
        <Text style={styles.subtitle}>Procedimiento 4</Text>
        <Text style={styles.description}>Procedemos a Cortar las papas 
        en rebanadas delgadas; Las salteamos hasta que estén 
        doradas, retiramos en una rejilla, salpimentamos y reservamos
        </Text>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 64,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: colors.variantWhite
  },
  title: {
    fontSize: 24,
    fontFamily: 'Comfortaa_400Regular',
  },
  subtitle: {
    fontSize: 22,
    marginTop: 16,
    fontFamily: 'NunitoSans_600SemiBold',
  },
  description: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  list: {
    width: '100%',
    paddingLeft: 48,
    paddingVertical: 16,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: colors.variantWhite
  },
  listText:{
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'white'
  },
  icon:{
    width: 24,
    height: 24
  },
  scroll:{
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 24,
  }
});