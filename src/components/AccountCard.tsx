import React from "react";
import { View, Text, Dimensions } from "react-native";
import { formatAccountNumber } from "../utils";

interface AccountCardProps {
  bankName: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
  isPrimary: boolean;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const AccountCard: React.FC<AccountCardProps> = ({
  bankName,
  accountNumber,
  accountType,
  balance,
  currency,
  isPrimary,
}) => {
  return (
    <View style={{ width: SCREEN_WIDTH, paddingHorizontal: 16 }}>
      {/* Card */}
      <View
        className={`rounded-xl p-4 ${
          isPrimary ? "bg-blue-600" : "bg-gray-800"
        } px-[15px] py-[10px] w-[350px] justify-center`}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center w-full">
          <Text className="text-white text-lg font-semibold w-2/4">{bankName}</Text>

          {isPrimary && (
            <Text className="text-yellow-400 font-bold text-sm px-2 py-1 border border-yellow-400 rounded">
              Primary
            </Text>
          )}
        </View>

        {/* Account Info */}
        <View className="mt-4">
          <Text className="text-gray-300 text-sm">{accountType}</Text>
          <Text className="text-white text-base mt-1">
            {formatAccountNumber(accountNumber)}
          </Text>
        </View>

        {/* Balance */}
        <View className="mt-auto">
          <Text className="text-gray-300 text-sm">Balance</Text>
          <Text className="text-white text-2xl font-bold mt-1">
            {currency} {balance.toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
};
