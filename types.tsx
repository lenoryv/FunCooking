/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
 import { GestureResponderEvent } from "react-native";
export type RootStackParamList = {
  Root: undefined;
  Colection: undefined;
  Product: undefined;
  Recipe: undefined;
  InfoProduct: undefined;
  Preparate: undefined;
  NotFound: undefined;
  Hamburger: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TopTabParamList = {
  Combinar: undefined;
  Favoritas: undefined;
  Libreta: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type ButtonParamList = {
  Colection: undefined;
};
export type OneScreenParamList = {
  ColectionScreen: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Credits: undefined;
  Exit: undefined;  
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type CreditsParamList = {
  CreditsScreen: undefined;
};

export type ExitParamList = {
  LoginScreen: undefined;
};

export type onPressFunc = (event: GestureResponderEvent) => void;