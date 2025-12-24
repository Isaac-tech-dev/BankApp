import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { Transaction, transactionData } from "../constants/index";
import { Entypo } from "@expo/vector-icons";



const renderTransactionItem: ListRenderItem<Transaction> = ({ item }) => {
  const textColor = item.amount.includes("-") ? "#EF4444" : "#22C55E"; // red-500 / green-500

  return (
    <View className="my-[5px]">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center space-x-3">
          <View className="w-[36px] h-[36px] justify-center items-center bg-[#EEF2F8] rounded-full">
            <Text className="text-[#005CEE] text-[14px] font-Inter-Medium">
              {item.name[0]}
            </Text>
          </View>

          <View>
            <Text className="text-[14px] text-white font-Inter-Medium">
              {item.name}
            </Text>
            <Text className="text-[12px] text-[#CECCFF] font-Inter-Regular">
              {`${item.bank} ${item.time}`}
            </Text>
          </View>
        </View>

        <Text
          className="text-[14px] font-Inter-SemiBold"
          style={{ color: textColor }}
        >
          {item.amount}
        </Text>
      </View>
    </View>
  );
};

const Transactions = () => {
  return (
    <View
      className={`bg-[#2a2a2a] h-[194px] rounded-[16px] px-[20px] py-[10px] space-y-4`}
    >
      <View>
        <View className={`flex-row justify-between items-center mb-[10px]`}>
          <Text className={`text-white text-[12px] font-Inter-SemiBold`}>
            Recent Transactions
          </Text>
          <View
            className={`bg-[#FEFEFE] w-[20px] h-[20px] justify-center items-center rounded-full`}
          >
            <Entypo name="chevron-right" size={18} color="black" />
          </View>
        </View>
        {/* LIST */}
        <View className={`space-y-4`}>
          <FlatList
            data={transactionData}
            keyExtractor={(item) => item.id}
            renderItem={renderTransactionItem}
            className={`space-y-4`}
          />
        </View>
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
