import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useAppSelector } from "../redux/hooks/hook";
import { Login } from "../screens/auth/Login";

export type AuthStackParamList = {
  Login: undefined;
};
const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
