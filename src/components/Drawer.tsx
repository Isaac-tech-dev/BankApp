import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { logUserOut } from "../redux/slice/userSlice";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawerContent(props: any) {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const { firstname, lastname } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout = () => {
    dispatch(logUserOut());
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* User Info */}
      <View>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }} // replace with user's profile
            className="w-10 h-10 rounded-full"
          />
          <Text style={styles.userName}>
            {`${firstname} ${lastname}` || "User Name"}
          </Text>
        </View>

        {/* Drawer Items */}
        <DrawerItem
          label="Dashboard"
          icon={({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          )}
          onPress={() => navigation.navigate("Dashboard" as never)}
        />
        <DrawerItem
          label="Profile Settings"
          icon={({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          )}
          onPress={() => navigation.navigate("ProfileSettings" as never)}
        />
        <DrawerItem
          label="Support"
          icon={({ color, size }) => (
            <Feather name="headphones" size={size} color={color} />
          )}
          onPress={() => navigation.navigate("Support" as never)}
        />
        <DrawerItem
          label="Transactions"
          icon={({ color, size }) => (
            <Feather name="credit-card" size={size} color={color} />
          )}
          onPress={() => navigation.navigate("Transactions" as never)}
        />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
        <MaterialIcons name="logout" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "space-between" },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  userName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#002D62",
  },
  logoutButton: {
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  logoutText: { color: "#fff", fontWeight: "600", marginRight: 8 },
});
