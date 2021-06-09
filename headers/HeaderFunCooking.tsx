import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



const FunCooking = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text>FUNCOOKING</Text>
        <Text>Exp</Text>
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
        height: 88,
        backgroundColor: 'white',
    }
  });
  

export default FunCooking;