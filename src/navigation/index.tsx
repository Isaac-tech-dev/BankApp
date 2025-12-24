import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStackNavigation from "./AuthStackNavigation";
import RootStackNavigation from "./RootStackNavigation";
import { useAppSelector } from "../redux/hooks/hook";
import FlashMessage from "react-native-flash-message";

const Navigation = () => {
  const user = useAppSelector((state) => state.user);

  const checkIfUserIsLoggedIn = () => {
    return user.isLoggedIn;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {checkIfUserIsLoggedIn() ? (
          <RootStackNavigation />
        ) : (
          <AuthStackNavigation />
        )}
      </NavigationContainer>

      <FlashMessage />
    </SafeAreaProvider>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
