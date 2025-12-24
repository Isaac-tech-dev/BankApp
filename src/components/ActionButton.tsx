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
      className="flex-1 flex-row bg-[#2a2a2a] rounded-[20px] h-[60px] items-center justify-center"
    >
      {icon}
      <Text className="text-[16px] text-white ml-2">{label}</Text>
    </TouchableOpacity>
  );
};
