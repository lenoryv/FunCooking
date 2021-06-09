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
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      },
    container: {
        height: 309,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDA55C'
      },
  });
  

export default Explora;