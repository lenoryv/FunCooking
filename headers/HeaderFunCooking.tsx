import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular } from '@expo-google-fonts/montserrat';


const FunCooking = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>FUNCOOKING</Text>
        <TouchableOpacity style={styles.button}
        onPress={() => { Alert.alert('En Desarollo :)') }}>
          <Image style={styles.icon}
          source={require('../assets/images/burger.png')} /></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'space-between',
      },
    container:{
        justifyContent:'flex-end',
        height: 112,
        paddingHorizontal:24,
        backgroundColor: 'white',
    },
    title:{
      fontFamily:'Montserrat_400Regular',
      color:'#003049',
      fontSize: 10,
      paddingBottom: 8
    },
    button: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    icon: {
      width: 24,
      height: 24
    }
  });
  

export default FunCooking;