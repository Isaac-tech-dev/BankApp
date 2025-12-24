import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import { showMessage } from "react-native-flash-message";
import { Feather } from "@expo/vector-icons";
import { getCurrencySymbol } from "../utils";

interface AccountCardProps {
  accountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
  isPrimary: boolean;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const AccountCard: React.FC<AccountCardProps> = ({
  accountNumber,
  accountType,
  balance,
  currency,
  isPrimary,
}) => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(accountNumber);
    showMessage({
      message: "Copied!",
      description: "Account number copied to clipboard",
      type: "success",
      duration: 3000,
    });
  };

  return (
    <View style={{ width: SCREEN_WIDTH,  }}>
      {/* Card */}
      <View
        className={`rounded-xl p-4 ${
          isPrimary ? "bg-[#000A4A]" : "bg-[#000A4A]"
        } px-[15px] py-[10px] w-[380px] justify-center`}
      >
        {/* Account Info */}
        <View className="mt-2 flex-row items-center justify-between">
          <View>
            <Text className="text-gray-300 text-[16px] font-bold">{accountType}</Text>
            <Text className="text-white text-[14px] mt-1">{accountNumber}</Text>
          </View>
          <TouchableOpacity onPress={copyToClipboard}>
            <Feather name="copy" size={18} color="white" />
          </TouchableOpacity>
        </View>

        {/* Balance */}
        <View className="mt-auto">
          <Text className="text-gray-300 text-sm">Balance</Text>
          <Text className="text-white text-2xl font-bold mt-1">
            {getCurrencySymbol(currency)} {balance.toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
};
