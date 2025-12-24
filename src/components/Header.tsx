import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getGreeting } from "../utils";

export const DashboardHeader = () => {
  const navigation = useNavigation();
  const { username } = useSelector((state: RootState) => state.user);

  return (
    <View className="flex-row justify-between items-center px-4 py-3 shadow">
      {/* Profile Image triggers drawer */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          className="w-10 h-10 rounded-full"
        />
      </TouchableOpacity>

      <Text className="text-lg font-semibold ml-3 flex-1">
        {" "}
        {getGreeting()}, {username}
      </Text>

      {/* Right Icons */}
      <View className="flex-row space-x-3">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full">
          <Feather name="bell" size={20} color="#1f2937" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
