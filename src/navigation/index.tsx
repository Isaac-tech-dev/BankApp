import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStackNavigation from "./AuthStackNavigation";
import RootStackNavigation from "./RootStackNavigation";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import FlashMessage from "react-native-flash-message";
import { useEffect } from "react";
import { getSavedUsername } from "../utils/storage";
import { setUser } from "../redux/slice/userSlice";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const checkIfUserIsLoggedIn = () => {
    return user.isLoggedIn;
  };

  useEffect(() => {
    const hydrateUser = async () => {
      const savedUsername = await getSavedUsername();

      if (savedUsername) {
        dispatch(
          setUser({
            username: savedUsername,
          })
        );
      }
    };

    hydrateUser();
  }, [dispatch]);

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
