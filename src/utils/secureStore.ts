import * as SecureStore from "expo-secure-store";

const CREDENTIALS_KEY = "user_credentials";

export const saveCredentials = async (
  username: string,
  password: string
) => {
  await SecureStore.setItemAsync(
    CREDENTIALS_KEY,
    JSON.stringify({ username, password }),
    {
      keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK,
    }
  );
};

export const getCredentials = async () => {
  const value = await SecureStore.getItemAsync(CREDENTIALS_KEY);
  return value ? JSON.parse(value) : null;
};

export const clearCredentials = async () => {
  await SecureStore.deleteItemAsync(CREDENTIALS_KEY);
};
