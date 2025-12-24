import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <TextInput
      {...props}
      className={`border border-blue-800 p-3 rounded ${className}`}
      placeholderTextColor="#888"
    />
  );
};
