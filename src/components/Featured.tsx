import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface FeaturedProps {
  title: string;
  description: string;
  cta?: string;
  onPress?: () => void;
}

export const Featured: React.FC<FeaturedProps> = ({
  title,
  description,
  cta = "Learn more",
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#F5F5F5] rounded-[20px] p-[16px]"
    >
      <Text className="text-[16px] font-Inter-SemiBold mb-1">
        {title}
      </Text>

      <Text className="text-[13px] text-gray-600 mb-2">
        {description}
      </Text>

      <Text className="text-[13px] text-black font-Inter-SemiBold">
        {cta} →
      </Text>
    </TouchableOpacity>
  );
};
