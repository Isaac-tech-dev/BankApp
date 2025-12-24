import React from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  SlideInLeft,
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { AccountCard } from "./AccountCard";
import { PaginationDots } from "./PaginationDots";

const { width } = Dimensions.get("window");

interface Props {
  accounts: any[];
}

export const AccountCardList: React.FC<Props> = ({ accounts }) => {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.FlatList
        data={accounts}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Animated.View
            entering={SlideInLeft.delay(Math.min(Number(item.id) * 50, 300))} // max 300ms
          >
            <AccountCard {...item} />
          </Animated.View>
        )}
      />

      <PaginationDots data={accounts} scrollX={scrollX} itemWidth={width} />
    </View>
  );
};
