import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  RefreshControl,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { fetchAccounts } from "../../api/client";
import { AccountCardList } from "../../components/home/AccountCardList";
import { ActionRow } from "../../components/home/ActionRow";
import { Featured } from "../../components/home/Featured";
import { DashboardHeader } from "../../components/home/Header";
import {
  hasBiometricHardware,
  isBiometricEnrolled,
} from "../../utils/biometrics";
import {
  enableBiometrics,
  shouldPromptForBiometrics,
  setLastPromptDate,
} from "../../utils/biometricPrefs";
import Transactions from "../../components/home/Transactions";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { DrawerParamList } from "../../navigation/AppDrawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParamList } from "../../navigation/RootStackNavigation";

type DashboardNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList, "Dashboard">,
  NativeStackNavigationProp<RootStackParamList, "AppDrawer">
>;

type DashboardScreenProps = {
  navigation: DashboardNavigationProp;
  route?: any;
};

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAccounts = useCallback(async () => {
    try {
      const data = await fetchAccounts(1);
      setAccounts(data);
      setError(null);
    } catch (err: any) {
      console.error(err);
      setError("Failed to load accounts");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

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
          { text: "No", style: "cancel", onPress: setLastPromptDate },
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

  const onRefresh = () => {
    setRefreshing(true);
    loadAccounts();
  };

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
    <SafeAreaView
      className={`flex-1 bg-[#FFFFFF] ${
        Platform.OS === "ios" ? `` : `pt-[40px]`
      }`}
    >
      <StatusBar style="auto" />
      <FlatList
        data={[]}
        renderItem={null}
        keyExtractor={(_, index) => index.toString()}
        onRefresh={onRefresh}
        refreshing={refreshing}
        ListHeaderComponent={
          <View className={`px-[10px] space-y-[10px]`}>
            <DashboardHeader navigation={navigation} />

            {/* ACCOUNT CARD */}
            <AccountCardList accounts={accounts} />

            {/* CTA */}
            <ActionRow />

            {/* TRANSACTIONS Header */}
            <View className="mt-5 flex-row items-center justify-between px-2">
              <Text className="text-[14px] font-medium">Transactions</Text>
              <TouchableOpacity>
                <Text className={`text-[12px] text-[#000A4A] font-normal`}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            {/* TRANSACTIONS COMPONENT */}
            <Transactions />
          </View>
        }
        ListFooterComponent={
          <View className={`px-[10px]`}>
            <View className={`px-2 mt-5`}>
              <Text className={`text-[14px] text-[#2E3A59] font-medium mb-2`}>
                Suggested actions
              </Text>
              <Featured
                title="Get a Virtual Card"
                description="Shop online securely with your virtual card"
                cta="Create now"
                onPress={() => {}}
              />
            </View>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};
