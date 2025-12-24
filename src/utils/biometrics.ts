// utils/biometrics.ts
import * as LocalAuthentication from "expo-local-authentication";

export const hasBiometricHardware = async () =>
  await LocalAuthentication.hasHardwareAsync();

export const isBiometricEnrolled = async () =>
  await LocalAuthentication.isEnrolledAsync();

export const authenticateWithBiometrics = async () =>
  await LocalAuthentication.authenticateAsync({
    promptMessage: "Authenticate to continue",
    fallbackLabel: "Use Passcode",
    disableDeviceFallback: false,
  });
