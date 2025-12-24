import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { ActionButton } from "./ActionButton";
import { SvgXml } from "react-native-svg";
import { CARD, FUND, PAY, WITHDRAW } from "../../svg";

export const ActionRow = () => {
  return (
    <View className="flex-col mt-5 space-y-3">
      <View className={`flex-row justify-between items-center`}>
        <Text className="text-[14px] font-medium">Quick Action</Text>
        <TouchableOpacity>
          <Text className={`text-[12px] text-[#000A4A] font-normal`}>
            See more
          </Text>
        </TouchableOpacity>
      </View>
      <View className={`flex-row`}>
        <View className="flex-1">
          <ActionButton label="Fund" icon={<SvgXml xml={FUND} />} />
        </View>

        <View className="flex-1">
          <ActionButton label="Withdraw" icon={<SvgXml xml={WITHDRAW} />} />
        </View>
        <View className="flex-1">
          <ActionButton label="Pay Bills" icon={<SvgXml xml={PAY} />} />
        </View>
        <View className="flex-1">
          <ActionButton label="Cards" icon={<SvgXml xml={CARD} />} />
        </View>
      </View>
    </View>
  );
};
