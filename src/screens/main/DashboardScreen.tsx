import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import Animated, { SlideInLeft, FadeIn, Layout } from "react-native-reanimated";

import { fetchAccounts } from "../../api/client";
import { AccountCard } from "../../components/AccountCard";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Transactions from "../../components/Transactions";
import { StatusBar } from "expo-status-bar";
import {
  hasBiometricHardware,
  isBiometricEnrolled,
} from "../../utils/biometrics";
import {
  enableBiometrics,
  shouldPromptForBiometrics,
  setLastPromptDate,
} from "../../utils/biometricPrefs";
import { AccountCardList } from "../../components/AccountCardList";
import { ActionRow } from "../../components/ActionRow";
import { Featured } from "../../components/Featured";

export const DashboardScreen = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const askForBiometrics = async () => {
      const shouldAsk = await shouldPromptForBiometrics();
      if (!shouldAsk) return;

      const supported = await hasBiometricHardware();
      const enrolled = await isBiometricEnrolled();

      if (!supported || !enrolled) return;

      Alert.alert(
        "Enable Biometric Login?",
        "Use Face ID / Fingerprint for faster login",
        [
          {
            text: "No",
            style: "cancel",
            onPress: setLastPromptDate,
          },
          {
            text: "Yes",
            onPress: async () => {
              await enableBiometrics();
              await setLastPromptDate();
            },
          },
        ]
      );
    };

    askForBiometrics();
  }, []);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        // fetch accounts for userId 1
        const data = await fetchAccounts(1);
        setAccounts(data);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load accounts");
      } finally {
        setLoading(false);
      }
    };

    loadAccounts();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <View className={`flex-1 bg-[#fff]`}>
      <StatusBar style="auto" />
      <View className="py-[20px] px-[10px]">
        <AccountCardList accounts={accounts} />

        {/* SFH */}
        <ActionRow />

        {/* TRANSACTION */}
        <View className={`mt-[20px]`}>
          <Text
            className={`text-light2 text-[13px] mb-[10px] font-Inter-SemiBold`}
          >
            Transactions
          </Text>
          <Transactions />
        </View>

        {/* FEATURES */}
        <Featured
          title="Get a Virtual Card"
          description="Shop online securely with your virtual card"
          cta="Create now"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
