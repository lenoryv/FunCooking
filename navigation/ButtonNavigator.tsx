/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ColectionScreen from '../screens/ColectionScreen';
 import { ButtonParamList, OneScreenParamList} from '../types';
 
 const Button = createStackNavigator<ButtonParamList>();
 
 export default function ButtonNavigator() {
 
   return (
     <Button.Navigator
       initialRouteName="Colection">
       <Button.Screen
         name="Colection"
         component={ButtonOneNavigator}
       />
     </Button.Navigator>
   );
 }
 
 // You can explore the built-in icon families and icons on the web at:
 // https://icons.expo.fyi/
 function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
 }
 
 // Each tab has its own navigation stack, you can read more about this pattern here:
 // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 const OneScreenStack = createStackNavigator<OneScreenParamList>();
 
 function ButtonOneNavigator() {
   return (
     <OneScreenStack.Navigator>
       <OneScreenStack.Screen
         name="ColectionScreen"
         component={ColectionScreen}
         options={{ headerTitle: 'Tab One Title' }}
       />
     </OneScreenStack.Navigator>
   );
 }
 