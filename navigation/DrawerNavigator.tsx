import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopTabNavigator from './TopTabNavigator';
import * as React from 'react';
import FunCooking from '../headers/HeaderFunCooking';

import NotFoundScreen from '../screens/NotFoundScreen';
import { DrawerParamList, HomeParamList, CreditsParamList, ExitParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}/>
      <Drawer.Screen
        name="Credits"
        component={CreditsNavigator}
      />
      <Drawer.Screen
        name="Exit"
        component={ClientsNavigator}
      />
    </Drawer.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={TopTabNavigator}
        options={{header: ()=> <FunCooking/>}}
      />
    </HomeStack.Navigator>
  )
}

const CreditsStack = createStackNavigator<CreditsParamList>();

function CreditsNavigator() {
  return (
    <CreditsStack.Navigator>
      <CreditsStack.Screen
        name="CreditsScreen"
        component={NotFoundScreen}
      />
    </CreditsStack.Navigator>
  )
}

const ExitStack = createStackNavigator<ExitParamList>();

function ClientsNavigator() {
  return (
    <ExitStack.Navigator>
      <ExitStack.Screen
        name="LoginScreen"
        component={NotFoundScreen}
      />
    </ExitStack.Navigator>
  )
}