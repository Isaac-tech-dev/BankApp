import AsyncStorage from "@react-native-async-storage/async-storage";

const BIOMETRIC_ENABLED = "biometric_enabled";
const BIOMETRIC_LAST_PROMPT = "biometric_last_prompt";

export const enableBiometrics = async () => {
  await AsyncStorage.setItem(BIOMETRIC_ENABLED, "true");
};

export const isBiometricEnabled = async () => {
  return (await AsyncStorage.getItem(BIOMETRIC_ENABLED)) === "true";
};

export const setLastPromptDate = async () => {
  await AsyncStorage.setItem(
    BIOMETRIC_LAST_PROMPT,
    new Date().toDateString()
  );
};

export const shouldPromptForBiometrics = async () => {
  const lastPrompt = await AsyncStorage.getItem(BIOMETRIC_LAST_PROMPT);
  const today = new Date().toDateString();

  return lastPrompt !== today;
};
