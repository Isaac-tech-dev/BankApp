import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator, View } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, className = "", loading = false, disabled, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      disabled={disabled || loading}
      className={`bg-black p-4 rounded-[10px] ${disabled || loading ? "opacity-50" : ""} ${className}`}
    >
      {loading ? (
        <View className="flex-row justify-center items-center">
          <ActivityIndicator size="small" color="#fff" className="mr-2" />
          <Text className="text-white font-semibold">{title}</Text>
        </View>
      ) : (
        <Text className="text-white text-center font-semibold">{title}</Text>
      )}
    </TouchableOpacity>
  );
};
