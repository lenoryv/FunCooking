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
import ButtonNavigator from './ButtonNavigator';
import FunCooking from '../headers/HeaderFunCooking';
import Exp from '../headers/HeaderTwo';
import TopTabNavigator from './TopTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Actions, Router, Scene } from "react-native-router-flux";
import ColectionScreen from '../screens/ColectionScreen';


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
      <Stack.Screen options={{header: ()=> <FunCooking/>}}
          name="Root" component={TopTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Colection" component={ColectionScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}
