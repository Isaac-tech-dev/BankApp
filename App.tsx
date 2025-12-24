import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";
import FlashMessage from "react-native-flash-message";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <View className={`flex-1`}>
      <Provider store={store}>
        <RootSiblingParent>
          <Navigation />
        </RootSiblingParent>
      </Provider>
    </View>
  );
}
