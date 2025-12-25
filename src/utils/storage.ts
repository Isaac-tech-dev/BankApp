import AsyncStorage from "@react-native-async-storage/async-storage";

const USERNAME_KEY = "@bankapp_username";

export const saveUsername = async (username: string) => {
  try {
    console.log("Saved User")
    await AsyncStorage.setItem(USERNAME_KEY, username);
  } catch (e) {
    console.error("Failed to save username", e);
  }
};

export const getSavedUsername = async (): Promise<string | null> => {
  try {
    console.log("GOT User")
    return await AsyncStorage.getItem(USERNAME_KEY);
  } catch (e) {
    console.error("Failed to get username", e);
    return null;
  }
};
