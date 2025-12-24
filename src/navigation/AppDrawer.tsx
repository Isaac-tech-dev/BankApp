import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DashboardScreen } from "../screens/main/DashboardScreen";
import CustomDrawerContent from "../components/Drawer";

const Drawer = createDrawerNavigator();

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
