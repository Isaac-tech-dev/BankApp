import React, { useState } from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { loginUser } from "../../api/client";
import { RootState } from "../../redux/store";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { showMessage } from "react-native-flash-message";

const { width } = Dimensions.get("window");

export const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const storedName = useSelector((s: RootState) => s.user.username);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const user = await loginUser(username, password);
      if (user) {
        showMessage({
          message: "Logged In Successfully",
          type: "success",
          duration: 3000,
        });
        dispatch(
          setUser({
            username: username,
            isLoggedIn: true,
          })
        );
        //navigation.replace("Dashboard");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className={`flex-1 justify-center px-[10px]`}>
      <View className={`space-y-[10px]`}>
        <StatusBar style="auto" />
        {storedName && (
          <Text className="text-lg mb-4">Welcome back, {storedName} 👋</Text>
        )}

        <View className={`space-y-[10px]`}>
          <Input placeholder="Username" onChangeText={setUsername} />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <Button title="Login" onPress={handleLogin} loading={loading} />
      </View>
    </View>
  );
};
