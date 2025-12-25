import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Navigation from "./src/navigation";
import { View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";
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
