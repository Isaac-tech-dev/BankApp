import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

interface Props {
  data: any[];
  scrollX: Animated.SharedValue<number>;
  itemWidth: number;
}

export const PaginationDots: React.FC<Props> = ({
  data,
  scrollX,
  itemWidth,
}) => {
  return (
    <View className="flex-row justify-center mt-3">
      {data.map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const scale = interpolate(
            scrollX.value / itemWidth,
            [index - 1, index, index + 1],
            [0.8, 1.2, 0.8],
            Extrapolate.CLAMP
          );

          const opacity = interpolate(
            scrollX.value / itemWidth,
            [index - 1, index, index + 1],
            [0.3, 1, 0.3],
            Extrapolate.CLAMP
          );

          return {
            transform: [{ scale }],
            opacity,
          };
        });

        return (
          <Animated.View
            key={index}
            className="w-[8px] h-[8px] bg-[#2a2a2a] rounded-full mx-[4px]"
            style={animatedStyle}
          />
        );
      })}
    </View>
  );
};
