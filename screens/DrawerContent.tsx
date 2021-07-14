import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';


import { useFonts, NunitoSans_600SemiBold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans';
import { Montserrat_400Regular} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading';

import NotFoundScreen from '../screens/NotFoundScreen';


export function DrawerContent(props:any,{
    navigation
    
  }: StackScreenProps<RootStackParamList, 'Hamburger'>) {
    let [fontsLoaded] = useFonts({
        NunitoSans_600SemiBold,
        NunitoSans_400Regular,
        Montserrat_400Regular
    
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.avatar}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_960_720.jpg'
                                }}
                                size={120}
                            />
                            <View style={{marginLeft:15, flexDirection:'column', alignItems: 'center'}}>
                                <Title style={styles.title}>Elia Made</Title>
                                <Caption style={styles.caption}>@eliamade</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>800</Paragraph>
                                <Caption style={styles.caption}>Puntos</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Cartas</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={() => (
                                <Image style={styles.icon}
                                source={require('../assets/images/credits.png')} 
                                />
                            )}
                            label={() => <Text style={styles.drawerText}>Créditos</Text>}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Image style={styles.icon}
                                source={require('../assets/images/report.png')} 
                                />
                            )}
                            label={() => <Text style={styles.drawerText}>Reportar Problema</Text>}
                            onPress={() => {props.navigation.navigate('NotFound')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => (
                        <Image style={styles.icon}
                        source={require('../assets/images/closeBlack.png')} 
                        />
                    )}
                    label={() => <Text style={styles.drawerText}>Cerrar Sesión</Text>}
                    onPress={() => {props.navigation.navigate('NotFound')}}
                />
            </Drawer.Section>
            <View style={styles.creator}>
                <Text style={styles.creatorText}>Whit</Text>
                <Image style={styles.iconLove}
                        source={require('../assets/images/love.png')} 
                        />
                <Text style={styles.creatorText}>InDevelopment Company</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      marginTop: 160,
    },
    avatar:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent: 'center',
      paddingLeft: 15,

    },
    userInfoSection: {
      alignItems:'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 22,
      marginTop: 16,
      fontFamily: 'NunitoSans_600SemiBold',
    },
    drawerText: {
      fontSize: 17,
      fontFamily: 'NunitoSans_400Regular',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontFamily: 'Montserrat_400Regular'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems:'center',
    },
    section: {
      width: 80,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 40,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    icon: {
        width: 24,
        height: 24
      },
    iconLove: {
        width: 15,
        height: 15,
        marginHorizontal: 8
      },
    creator:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 24,
    },
    creatorText:{
        fontSize: 12,
      fontFamily: 'Montserrat_400Regular',
    }
  });