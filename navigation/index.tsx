/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import FunCooking from '../headers/HeaderFunCooking';
import TopTabNavigator from './TopTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ColectionScreen from '../screens/ColectionScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './DrawerNavigator';
import ProductScreen from '../screens/ProductScreen';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();


function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Colection" component={ColectionScreen} options={{headerShown:false}} />
      <Stack.Screen name="Product" component={ProductScreen} options={{headerShown:false}} />
      <Stack.Screen options={{headerShown:false}}
      name="Root" component={DrawerNavigator}/>
    </Stack.Navigator>
  );
}

