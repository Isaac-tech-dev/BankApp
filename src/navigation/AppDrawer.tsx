import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { DashboardScreen } from "../screens/main/DashboardScreen";
import CustomDrawerContent from "../components/Drawer";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: "Dashboard",
        headerLeft: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
