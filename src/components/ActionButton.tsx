import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#F9F9F9] rounded-[7px] h-[80px] w-[80px] items-center justify-center space-y-2"
    >
      {icon}
      <Text className="text-[14px] text-[#111827] font-normal ml-2">{label}</Text>
    </TouchableOpacity>
  );
};
