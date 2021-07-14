import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopTabNavigator from './TopTabNavigator';
import * as React from 'react';

import { FunCooking } from '../headers/HeaderFunCooking';

import { DrawerContent } from '../screens/DrawerContent';

import { DrawerParamList, HomeParamList,} from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}/>
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