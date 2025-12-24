import { ImageSourcePropType } from "react-native";

export interface OnboardingData {
  id: number;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  image1?: ImageSourcePropType;
  image2?: ImageSourcePropType;
  backgroundColor: string;
}
export const onboardingData: OnboardingData[] = [
  {
    id: 1,
    title: "Spend your money easily without any complications",
    subtitle: "Receive funds sent to you in seconds.",
    image: require("../../assets/images/onboarding/main1.png"),
    image1: require("../../assets/images/onboarding/main2.png"),
    image2: require("../../assets/images/onboarding/main3.png"),
    backgroundColor: '#55D9FC'
  },
  {
    id: 2,
    title: "A super secure way to pay your bills",
    subtitle: "Pay your bills with the cheapest rates in town.",
    image: require("../../assets/images/onboarding/device.png"),
     backgroundColor: '#4285F4'
  },
  {
    id: 3,
    title: "A virtual USD card for your payments",
    subtitle: "Shop globally. Renew your subscriptions with ease.",
    image: require("../../assets/images/onboarding/card.png"),
     backgroundColor: '#AF72DB'
  },
];
