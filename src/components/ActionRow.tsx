import React from "react";
import { View } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { ActionButton } from "./ActionButton";

export const ActionRow = () => {
  return (
    <View className="flex-row mt-5">
      <View className="flex-1 mr-2">
        <ActionButton
          label="Send"
          icon={<Feather name="send" color="white" size={20} />}
        />
      </View>

      <View className="flex-1 ml-2">
        <ActionButton
          label="History"
          icon={<FontAwesome name="history" size={20} color="white" />}
        />
      </View>
    </View>
  );
};
