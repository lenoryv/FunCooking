import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



const Explora = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text>Combinar</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: 50,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      },
    container: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDA55C'
      },
  });
  

export default Explora;