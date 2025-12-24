import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { OnboardingData, onboardingData } from "../../constants";
import { AuthStackParamList } from "../../navigation/AuthStackNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const { width } = Dimensions.get("window");

type OnboardingScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "Onboarding"
>;

const Onboarding = ({ navigation }: OnboardingScreenProps) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: any) => (
    <View className="w-full relative" style={{ width }}>
      <Image
        source={item.image}
        resizeMode="contain"
        className={`w-full h-[650px] ${
          currentIndex === 0 ? `mt-[90px]` : `mt-[20px]`
        }`}
      />
      <Image
        source={item.image1}
        resizeMode="contain"
        className={`w-[240px] h-full absolute top-[-280px] left-3 z-[1000]`}
      />
      <Image
        source={item.image2}
        resizeMode="contain"
        className={`w-[240px] h-full absolute top-[-280px] right-0`}
      />
    </View>
  );

  return (
    <SafeAreaView
      className={`flex-1`}
      style={{ backgroundColor: onboardingData[currentIndex].backgroundColor }}
    >
      <View>
        <FlatList
          data={onboardingData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={renderItem}
          ref={flatListRef}
        />
      </View>
      <View
        className={`absolute h-[384px] w-414px z-[1000] bg-[#ffffff] px-6 pt-6 bottom-0 gap-[30px] left-0 right-0`}
      >
        {/* Pagination Dots */}
        <View className="flex-row justify-center mt-4">
          {onboardingData.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-[29px] mx-1 rounded-full ${
                index === currentIndex ? "bg-[#1F195F]" : "bg-[#D6D6D6]"
              }`}
            />
          ))}
        </View>

        <View>
          <Text className="text-center text-[#1F195F] text-xl font-bold leading-7">
            {onboardingData[currentIndex].title}
          </Text>
          <Text className="text-center text-[#5E5D68] text-base mt-2">
            {onboardingData[currentIndex].subtitle}
          </Text>
        </View>

        {/* Bottom Panel */}
        <View className="">
          <TouchableOpacity
            className="bg-[#1F195F] py-4 rounded-lg mb-3"
          >
            <Text className="text-white text-center font-semibold">
              Create an account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-[#1F195F] py-4 rounded-lg"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-[#1F195F] text-center font-semibold">
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
