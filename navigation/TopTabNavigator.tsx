/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';

 
 import TabOneScreen from '../screens/TabOneScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import TabThreeScreen from '../screens/TabThreeScreen';
 import { TopTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList,OneScreenParamList, ButtonParamList } from '../types';
 import AppLoading from 'expo-app-loading';
 import { useFonts, NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';
 
 const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

 
 export default function TopTabNavigator(): JSX.Element {
  let [fontsLoaded] = useFonts({
    NunitoSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
 
   return (
     <TopTab.Navigator
       initialRouteName="Combinar"
       tabBarOptions={{
        scrollEnabled: true,
        showLabel :true,
        style: {
          width: '100%',
          elevation: 0,
          opacity: 1,
        },
        labelStyle: {
          textAlign: 'center',
          textTransform: 'capitalize',
          width: 110,
          fontFamily:'NunitoSans_600SemiBold',
          fontSize:22,
          color:'#212121',
          marginBottom: 0,
          marginTop: 0,
        },
        tabStyle: {
            width: 'auto',
        },
        indicatorStyle: {
          borderBottomColor: '#212121',
          borderBottomWidth: 2,
          borderRadius: 2,
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
         options={{headerShown:false}}
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
         options={{headerShown:false}}
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
          options={{headerShown:false}}
        />
      </TabThreeStack.Navigator>
    );
 }




 