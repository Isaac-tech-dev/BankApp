import  { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { loginUser } from "../../api/client";
import { RootState } from "../../redux/store";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { showMessage } from "react-native-flash-message";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/AuthStackNavigation";
import { SvgXml } from "react-native-svg";
import { FACEID_SVG, TOUCHID_SVG } from "../../svg";
import { getCredentials, saveCredentials } from "../../utils/secureStore";
import { isBiometricEnabled } from "../../utils/biometricPrefs";
import {
  authenticateWithBiometrics,
  hasBiometricHardware,
  isBiometricEnrolled,
} from "../../utils/biometrics";
import { saveUsername } from "../../utils/storage";

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">;

export const Login = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch();
  const storedName = useSelector((s: RootState) => s.user.username);

  const [username, setUsername] = useState(storedName ? storedName : "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //Check if Biometric is enabled
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    const checkBiometrics = async () => {
      const supported = await hasBiometricHardware();
      const enrolled = await isBiometricEnrolled();
      const enabled = await isBiometricEnabled();

      setIsBiometricSupported(supported && enrolled && enabled);
    };

    checkBiometrics();
  }, []);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const user = await loginUser(username, password);

      if (user) {
        await saveCredentials(username, password);
        // Extract first and last name if available
        const [firstname, lastname] = user.name
          ? user.name.split(" ")
          : [null, null];
        await saveUsername(username);

        // Dispatch full user info
        dispatch(
          setUser({
            username: user.username ?? null,
            email: user.email ?? null,
            firstname: firstname ?? null,
            lastname: lastname ?? null,
            uuid: user.id ?? null,
            isLoggedIn: true,
          })
        );

        showMessage({
          message: "Logged In Successfully",
          type: "success",
          duration: 3000,
        });
      } else {
        showMessage({
          message: "Invalid username or password",
          type: "danger",
          duration: 3000,
        });
      }
    } catch (err) {
      console.error(err);
      showMessage({
        message: "An error occurred. Please try again.",
        type: "danger",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBiometricLogin = async () => {
    try {
      const auth = await authenticateWithBiometrics();
      if (!auth.success) return;

      const creds = await getCredentials();
      if (!creds) {
        showMessage({
          message: "No saved credentials found",
          type: "danger",
        });
        return;
      }

      setLoading(true);

      const user = await loginUser(creds.username, creds.password);

      if (user) {
        const [firstname, lastname] = user.name
          ? user.name.split(" ")
          : [null, null];

        dispatch(
          setUser({
            username: user.username ?? null,
            email: user.email ?? null,
            firstname,
            lastname,
            uuid: user.id ?? null,
            isLoggedIn: true,
          })
        );
      }
    } catch (err) {
      showMessage({
        message: "Biometric authentication failed",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderUserWithData = () => {
    return (
      <View className={`flex-1 px-[10px]`}>
        <View className={`flex-1 items-center justify-center`}>
          <Image
            source={require("../../../assets/images/onboarding/ruach.png")}
            className={`w-[300px] h-[300px] rounded-full`}
            resizeMode="contain"
          />
        </View>
        <View className={`flex-1 space-y-[10px]`}>
          <StatusBar style="auto" />
          {storedName && (
            <Text className={`text-[24px] font-bold mb-4`}>
              Welcome back, {storedName} 👋
            </Text>
          )}

          <View style={{ gap: 12 }}>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              isPassword
            />
            <TouchableOpacity className={`items-end`}>
              <Text className={`text-[14px] font-semibold`}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Login"
            onPress={handleLogin}
            loading={loading}
            className={`bg-[#1F195F]`}
          />

          {/* ID */}
          {isBiometricSupported && (
            <View className={`flex items-center justify-center`}>
              <TouchableOpacity
                className={`w-[100px] h-[100px] items-center justify-center rounded-[10px]`}
                onPress={handleBiometricLogin}
              >
                {Platform.OS === "ios" ? (
                  <SvgXml xml={FACEID_SVG} width={50} height={50} />
                ) : (
                  <SvgXml xml={TOUCHID_SVG} width={50} height={50} />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const renderUserWithoutData = () => {
    return (
      <View className={`flex-1 px-[10px]`}>
        <View className={`flex-1 items-center justify-center`}>
          <Image
            source={require("../../../assets/images/onboarding/ruach.png")}
            className={`w-[300px] h-[300px] rounded-full`}
            resizeMode="contain"
          />
        </View>
        <View className={`flex-1`}>
          <StatusBar style="auto" />
          {storedName && (
            <Text className={`text-[24px] font-bold mb-4`}>
              Welcome back, {storedName} 👋
            </Text>
          )}

          <View className={`mb-[10px]`} style={{ gap: 10 }}>
            <Input
              placeholder="Username"
              onChangeText={setUsername}
              className="mb-[15px]"
            />
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              isPassword
            />
            <TouchableOpacity className={`items-end`}>
              <Text className={`text-[14px] font-semibold`}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Login"
            onPress={handleLogin}
            loading={loading}
            className={`bg-[#1F195F]`}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className={`flex-1`}>
      {storedName ? renderUserWithData() : renderUserWithoutData()}
    </SafeAreaView>
  );
};
