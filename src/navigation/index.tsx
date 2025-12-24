import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import * as LightTheme from "../constants/themes/LightTheme.json";
import * as DarkTheme from "../constants/themes/DarkTheme.json";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AuthStackNavigation from "./AuthStackNavigation";
import RootStackNavigation from "./RootStackNavigation";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlashMessage from "react-native-flash-message";
import { setUser, UserState } from "../redux/slice/userSlice";

const Navigation = () => {
  //const settings = useAppSelector((state) => state.settings);
  //const appearance = useColorScheme();
  //const displaymode = useAppSelector((state) => state.settings.displaymode);
  const user = useAppSelector((state) => state.user);
  //const dispatch = useAppDispatch();
  //const [isStorageLoaded, setIsStorageLoaded] = useState(false);

  const checkIfUserIsLoggedIn = () => {
    return user.isLoggedIn;
  };

  console.log(user.isLoggedIn);

  useEffect(() => {
    //extractSettingFromAsycnStorage();
  }, []);

  // const returnAppTheme = () => {
  //   if (!settings || settings.displaymode == "none") {
  //     return appearance == "dark" ? DarkTheme : LightTheme;
  //   }
  //   return settings.displaymode == "dark" ? DarkTheme : LightTheme;
  // };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {checkIfUserIsLoggedIn() ? (
          <RootStackNavigation />
        ) : (
          //<RootStackNavigation />
          <AuthStackNavigation />
        )}
      </NavigationContainer>

      <FlashMessage />
    </SafeAreaProvider>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
