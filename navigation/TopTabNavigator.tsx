/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import Explora from '../headers/HeaderOne';
 import TabOneScreen from '../screens/TabOneScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import TabThreeScreen from '../screens/TabThreeScreen';
 import { TopTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
 
 const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

 
 export default function TopTabNavigator(): JSX.Element {
 
   return (
     <TopTab.Navigator
       initialRouteName="Combinar"
       tabBarOptions={{
        scrollEnabled: true,
        showLabel :true,
        style: {
          backgroundColor: 'white',
          elevation: 0,
          opacity: 1,
        },
        labelStyle: {
          textAlign: 'center',
          paddingTop: 24,
          textTransform: 'capitalize',
          width: 100,
        },
        tabStyle: {
            width: 'auto',
        },
        indicatorStyle: {
          borderBottomColor: '#212121',
          borderBottomWidth: 2,
          borderRadius: 2
        },
      }}>
       <TopTab.Screen
         name="Combinar"
         component={TabOneNavigator}

       />
       <TopTab.Screen
         name="Favoritas"
         component={TabTwoNavigator}
       />
       <TopTab.Screen
         name="Libreta"
         component={TabThreeNavigator}
       />
     </TopTab.Navigator>
   );
 }
 

 
 // Each tab has its own navigation stack, you can read more about this pattern here:
 // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 const TabOneStack = createStackNavigator<TabOneParamList>();
 
 function TabOneNavigator() {
   return (
     <TabOneStack.Navigator>
       <TabOneStack.Screen
         name="TabOneScreen"
         component={TabOneScreen}
         options={{
          header: () => <Explora/>,
        }}

       />
     </TabOneStack.Navigator>
   );
 }
 
 const TabTwoStack = createStackNavigator<TabTwoParamList>();
 
 function TabTwoNavigator() {
   return (
     <TabTwoStack.Navigator>
       <TabTwoStack.Screen
         name="TabTwoScreen"
         component={TabTwoScreen}
         options={{ headerTitle: 'Tab Two Title' }}
       />
     </TabTwoStack.Navigator>
   );
 }

 const TabThreeStack = createStackNavigator<TabThreeParamList>();

 function TabThreeNavigator() {
    return (
      <TabThreeStack.Navigator>
        <TabThreeStack.Screen
          name="TabThreeScreen"
          component={TabThreeScreen}
          options={{ headerTitle: 'Tab Two Title' }}
        />
      </TabThreeStack.Navigator>
    );
 }
 