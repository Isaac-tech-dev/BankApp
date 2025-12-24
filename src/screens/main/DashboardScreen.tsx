import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Animated, { SlideInLeft, FadeIn, Layout } from "react-native-reanimated";

import { fetchAccounts } from "../../api/client";
import { AccountCard } from "../../components/AccountCard";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export const DashboardScreen = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <View className="py-[20px] px-[20px]">
        <FlatList
          data={accounts}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Animated.View entering={SlideInLeft.delay(Number(item.id) * 100)}>
              <AccountCard {...item} />
            </Animated.View>
          )}
        />

        {/* SFH */}
        <View className={`flex-row flex-wrap mt-[20px] justify-center space-x-[30px] border`}>
          <TouchableOpacity
            className={`bg-[#2a2a2a] rounded-full w-[60px] h-[60px] items-center justify-center`}
          >
            <Feather name="send" color={"white"} size={18} />
            <Text className={`text-[16px] text-[#fff]`}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`bg-[#2a2a2a] rounded-full w-[60px] h-[60px] items-center justify-center`}
          >
            <MaterialCommunityIcons name="cash-refund" size={18} color="white" />
            <Text className={`text-[16px] text-[#fff]`}>Fund</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`bg-[#2a2a2a] rounded-full w-[60px] h-[60px] items-center justify-center`}
          >
            <Feather name="send" color={"white"} size={18} />
            <Text className={`text-[16px] text-[#fff]`}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
