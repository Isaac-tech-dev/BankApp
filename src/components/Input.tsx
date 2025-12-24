import React, { useState } from "react";
import { View, TextInput, TextInputProps, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  className?: string;
  isPassword?: boolean; // new prop to indicate password field
}

export const Input: React.FC<InputProps> = ({
  className = "",
  isPassword = false,
  ...props
}) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View
      className={`flex-row items-center border-[1.5px] border-[#1F195F] p-3 rounded-[10px] ${className}`}
      style={{ height: 50 }}
    >
      <TextInput
        {...props}
        className="flex-1"
        secureTextEntry={secureText}
        placeholderTextColor="#888"
        style={{ height: 50 }}
      />
      {isPassword && (
        <Pressable onPress={() => setSecureText(!secureText)}>
          <Feather
            name={secureText ? "eye" : "eye-off"}
            size={20}
            color="#555"
          />
        </Pressable>
      )}
    </View>
  );
};
