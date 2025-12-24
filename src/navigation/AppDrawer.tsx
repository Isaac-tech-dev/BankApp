import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DashboardScreen } from "../screens/main/DashboardScreen";
import CustomDrawerContent from "../components/Drawer";

export type DrawerParamList = {
  Dashboard: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerType: "front", headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
