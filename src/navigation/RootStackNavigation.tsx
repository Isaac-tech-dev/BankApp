import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import AppDrawer from "./AppDrawer";

export type RootStackParamList = {
  AppDrawer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <RootStack.Screen
        name="AppDrawer"
        component={AppDrawer}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
