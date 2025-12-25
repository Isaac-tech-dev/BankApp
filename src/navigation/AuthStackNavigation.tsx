import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useAppSelector } from "../redux/hooks/hook";
import { Login } from "../screens/auth/Login";
import Onboarding from "../screens/auth/Onboarding";

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
};
const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  const user = useAppSelector((state) => state.user);
  

  return (
    <AuthStack.Navigator
      initialRouteName={user.username ? "Login" : "Onboarding"}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
